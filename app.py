from ssl import PROTOCOL_TLSv1_1, PROTOCOL_TLSv1_2
from termios import TAB1
from threading import currentThread
from types import resolve_bases
from flask import Flask, render_template
from flask_jwt_extended import (
    create_access_token,
    get_jwt,
    get_jwt_identity,
    unset_jwt_cookies,
    jwt_required,
    JWTManager,
)
from flask_cors import CORS
import os
import subprocess
import sys
from queries import *
from flask.globals import request, session
import json
import datetime
from dotenv import load_dotenv
from candidate_module import *
from creator_module import *
from company_module import *
import random
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import smtplib

load_dotenv()

app = Flask(__name__)

app.register_blueprint(candidate)
app.register_blueprint(creator)
app.register_blueprint(company)

cors = CORS(app)
app.config["Access-Control-Allow-Origin"] = "*"
app.config["Access-Control-Allow-Headers"] = "Content-Type"
app.config["DEBUG"] = os.getenv("DEBUG")

app.config["JWT_HEADER_NAME"] = "X-Forwarded-Authorization"

smtp = smtplib.SMTP("smtp.gmail.com", 587)


@app.route("/")
def hello_world():
    return "This is my first API call!"


# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Sending Verification otp using mail
def send_verification_mail(client_mail):
    try:
        # client_mail = request.json['email']

        # Generate OTP
        otp = random.randint(1000, 9999)
        hostname = (
            os.environ.get("APP_URL")
            + "/verify?otp="
            + str(otp)
            + "&"
            + "email="
            + client_mail
        )
        # Invoking smtp to send mail
        smtp.starttls()
        smtp.login(os.environ.get("APP_MAIL"), os.environ.get("APP_PASSWORD"))

        msg = MIMEMultipart("alternative")
        msg["Subject"] = "Dehitas email verification."
        msg["From"] = os.environ.get("APP_MAIL")
        msg["To"] = client_mail

        html = f"""
            Hi User,<br/>
            <p>Please click on the <a href='{hostname}'>link</a> to verify.</p><br/>
            Thank You,<br/>
            Team DEHITAS
        """

        part1 = MIMEText(html, "html")

        msg.attach(part1)

        smtp.sendmail(os.environ.get("APP_MAIL"), client_mail, msg.as_string())
        smtp.close()
        return otp

    except Exception as e:
        print(e)
        return None


# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Check Username Availability


@app.route("/check_username", methods=["POST"])
def check_username():
    username = request.json["username"]
    # email = request.json['email']
    # walletAddress = request.json['walletAddress']

    # Checking if the User Already Exists or Not
    fields = "*"
    tablename = os.environ.get("login_table")
    condition = "username='" + username + "'"
    # Select Query
    data = select_query(fields, tablename, condition)
    final_data = json.loads(data.decode("utf-8"))

    if len(final_data["rows"]) == 0:
        return {"status": 200, "data": "valid"}, 200

    response_body = {"status": 409, "data": "username already existsvalid"}, 409
    return response_body


# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Check Email Availability


@app.route("/check_email", methods=["POST"])
def check_email():
    # username = request.json['username']
    email = request.json["email"]
    # walletAddress = request.json['walletAddress']

    # Checking if the User Already Exists or Not
    fields = "*"
    tablename = os.environ.get("login_table")
    condition = "email='" + email + "'"
    # Select Query
    data = select_query(fields, tablename, condition)
    final_data = json.loads(data.decode("utf-8"))

    if len(final_data["rows"]) == 0:
        return {"status": 200, "data": "valid"}, 200

    response_body = {"status": 409, "data": "email already exists"}, 409
    return response_body


# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Signup API


@app.route("/signup", methods=["POST"])
def signup():
    username = request.json["username"]
    email = request.json["email"]

    print(username, email)

    walletAddress = request.json["walletAddress"]

    # Checking if the User Already Exists or Not
    fields = "*"
    tablename = os.environ.get("login_table")
    condition = (
        tablename
        + "."
        + "username='"
        + username
        + "' OR "
        + tablename
        + "."
        + "email='"
        + email
        + "' OR "
        + tablename
        + "."
        + "walletAddress='"
        + walletAddress
        + "'"
    )
    # Select Query
    data = select_query(fields, tablename, condition)
    final_data = json.loads(data.decode("utf-8"))

    if len(final_data["rows"]) == 0:
        # If not Exist Insert to Database
        otp = send_verification_mail(email)
        fields = "(username,email,walletaddress,otp,createdat)"
        values = f"""('{username}', '{email}','{walletAddress}','{otp}',{int(datetime.datetime.now().timestamp())})"""

        # Insert Query
        data = insert_query(tablename, fields, values)
        response_body = {
            "status": 200,
            "data": "User's Record Added Successfully !",
        }, 200
        return response_body

    response_body = {"status": 409, "data": "User Already Exists !"}, 409
    return response_body


# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Email OTP Verification
@app.route("/verify", methods=["GET"])
def verify():
    try:
        otp = request.args["otp"]
        email = request.args["email"]
        fields = "(otp)"
        tablename = os.environ.get("login_table")
        condition = f"""email='{email}'"""
        data = select_query(fields, tablename, condition)
        final_data = json.loads(data.decode("utf-8"))
        print(final_data["rows"][0])
        print(otp)
        try:
            if final_data["rows"][0][0] == str(otp):
                fields = {"varified": 1}

                data = update_query(tablename, fields, condition, False)
                return render_template("verified.html")
            else:
                return render_template("not_verified.html")
        except:
            return render_template("not_verified.html")

    except Exception as e:
        return {"message": str(e)}


# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Inserting Role Of User
@app.route("/insertRole", methods=["POST"])
def insertRole():
    walletAddress = request.json["walletAddress"]
    role = request.json["role"]
    fields = "*"
    tablename = os.environ.get("login_table")

    # Checking If the Address is Exists Or Not
    condition = f"""walletAddress='{walletAddress}'"""
    data = select_query(fields, tablename, condition)
    final_data = json.loads(data.decode("utf-8"))
    if len(final_data["rows"]) == 0:
        response_body = {"status": 409, "data": "User Does Not Exists !"}, 409
        return response_body
    if final_data["rows"][0][6] == None:
        response_body = {"status": 409, "data": "User Does Not Exists !"}, 409
        return response_body

    if final_data["rows"][0][4] != None:
        response_body = {"status": 409, "data": "user role already selected !"}, 409
        return response_body

    fields = {"role": f"{role}"}

    condition = f"""walletAddress='{walletAddress}'"""

    # Update Query
    data = update_query(tablename, fields, condition, False)

    response_body = {"status": 200, "data": "User's Role Updated Successfully !"}
    return response_body


# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Get Role Of User By Address
@app.route("/getProfile", methods=["POST"])
def getProfile():
    try:
        walletAddress = request.json["wallet_address"]
        role = getWalletRole(walletAddress)
        try:
            if role[0].lower() == "creator":
                fields = "(login_id)"
                tablename = os.environ.get("creators_table")
                user_skill_table = os.environ.get("user_skill_table")
                experience_table = os.environ.get("user_experiance_table")
                achievement_table = os.environ.get("user_achivement_table")
                skill_table = os.environ.get("skill_table")
                condition = f"""wallet_address='{walletAddress}'"""
                id_data = select_query(fields, tablename, condition)
                final_id_data = json.loads(id_data.decode("utf-8"))
                login_id = final_id_data["rows"][0][0]
                query = f"""
                tableland read "
                SELECT
                    *
                FROM
                    {tablename}
                WHERE
                    login_id = '{login_id}'"
                """
                data = subprocess.check_output([query], shell=True)
                final_data = json.loads(data.decode("utf-8"))
                response_body = {}
                for i in range(len(final_data["rows"][0])):
                    response_body[final_data["columns"][i]["name"]] = final_data[
                        "rows"
                    ][0][i]

                try:
                    # second query to get multiple skills
                    fields1 = "skill_id"
                    condition1 = f"""login_id='{login_id}'"""
                    id_data1 = select_query(fields1, user_skill_table, condition1)
                    final_id_data1 = json.loads(id_data1.decode("utf-8"))
                    skill_id = final_id_data1["rows"][0][0]
                    list_ = final_id_data1["rows"]
                    flatList = []
                    for element in list_:
                        if type(element) is list:
                            # Check if type is list than iterate through the sublist
                            for item in element:
                                flatList.append(item)
                        else:
                            flatList.append(element)
                    list_skill_id = list(set(flatList))
                    response_body["skills"] = []
                    for skill_id in list_skill_id:
                        query1 = f"""
                        tableland read "
                        SELECT
                            *
                        FROM
                            {skill_table}
                        WHERE
                            skill_id = '{skill_id}'"
                        """
                        data1 = subprocess.check_output([query1], shell=True)
                        final_data1 = json.loads(data1.decode("utf-8"))
                        response_body["skills"].append(final_data1["rows"][0][1])

                except Exception as e:
                    response_body["skills"] = []

                try:
                    # third query to get multiple experience
                    query3 = f"""
                    tableland read "
                    SELECT
                        title as e_title,employement_type,company_name,location,start_date,end_date,status,description as e_description                  
                    FROM
                        {experience_table}
                    WHERE
                        login_id = '{login_id}'"
                    """
                    data3 = subprocess.check_output([query3], shell=True)
                    final_data3 = json.loads(data3.decode("utf-8"))
                    body = {}
                    final_list = []
                    for i in range(len(final_data3["rows"])):
                        for j in range(len(final_data3["rows"][0])):
                            body[final_data3["columns"][j]["name"]] = final_data3[
                                "rows"
                            ][0][j]
                        final_list.append(body)
                    response_body["experiences"] = final_list
                except Exception as e:
                    response_body["experiences"] = []

                # forth query to get multiple achievements
                try:
                    query4 = f"""
                    tableland read "
                    SELECT
                        title as a_title,description as a_description,image,issueing_organization,score                 
                    FROM
                        {achievement_table}
                    WHERE
                        login_id = '{login_id}'"
                    """
                    data3 = subprocess.check_output([query4], shell=True)
                    final_data4 = json.loads(data3.decode("utf-8"))
                    body1 = {}
                    final_list1 = []
                    for i in range(len(final_data4["rows"])):
                        for j in range(len(final_data4["rows"][0])):
                            body1[final_data4["columns"][j]["name"]] = final_data4[
                                "rows"
                            ][0][j]
                        final_list1.append(body1)
                    response_body["achievements"] = final_list1
                except Exception as e:
                    response_body["achievements"] = []
                return response_body

            # for candidate
            elif role[0].lower() == "candidate":
                fields = "(login_id)"
                tablename = os.environ.get("candidate_table")
                user_skill_table = os.environ.get("user_skill_table")
                experience_table = os.environ.get("user_experiance_table")
                education_table = os.environ.get("user_education")
                skill_table = os.environ.get("skill_table")
                condition = f"""wallet_address='{walletAddress}'"""
                id_data = select_query(fields, tablename, condition)
                final_id_data = json.loads(id_data.decode("utf-8"))
                login_id = final_id_data["rows"][0][0]
                query = f"""
                tableland read "
                SELECT
                    *
                FROM
                    {tablename}
                WHERE
                    login_id = '{login_id}'"
                """
                data = subprocess.check_output([query], shell=True)
                final_data = json.loads(data.decode("utf-8"))
                response_body = {}
                for i in range(len(final_data["rows"][0])):
                    response_body[final_data["columns"][i]["name"]] = final_data[
                        "rows"
                    ][0][i]

                # second query to get multiple skills
                try:
                    fields1 = "skill_id"
                    condition1 = f"""login_id='{login_id}'"""
                    id_data1 = select_query(fields1, user_skill_table, condition1)
                    final_id_data1 = json.loads(id_data1.decode("utf-8"))
                    skill_id = final_id_data1["rows"][0][0]
                    list_ = final_id_data1["rows"]
                    flatList = []
                    for element in list_:
                        if type(element) is list:
                            # Check if type is list than iterate through the sublist
                            for item in element:
                                flatList.append(item)
                        else:
                            flatList.append(element)
                    list_skill_id = list(set(flatList))
                    response_body["skills"] = []
                    for skill_id in list_skill_id:
                        query1 = f"""
                        tableland read "
                        SELECT
                            *
                        FROM
                            {skill_table}
                        WHERE
                            skill_id = '{skill_id}'"
                        """
                        data1 = subprocess.check_output([query1], shell=True)
                        final_data1 = json.loads(data1.decode("utf-8"))
                        try:
                            response_body["skills"].append(final_data1["rows"][0][1])
                        except Exception as e:
                            response_body["skills"] = []
                except Exception as e:
                    response_body["skills"] = []
                # third query to get multiple experience
                try:
                    query3 = f"""
                    tableland read "
                    SELECT
                        title as e_title,employement_type,company_name,location,start_date,end_date,status,description as e_description
                    FROM
                        {experience_table}
                    WHERE
                        login_id = '{login_id}'"
                    """
                    data3 = subprocess.check_output([query3], shell=True)
                    final_data3 = json.loads(data3.decode("utf-8"))
                    body = {}
                    final_list = []
                    for i in range(len(final_data3["rows"])):
                        for j in range(len(final_data3["rows"][0])):
                            body[final_data3["columns"][j]["name"]] = final_data3[
                                "rows"
                            ][0][j]
                        final_list.append(body)
                    response_body["experiences"] = final_list
                except Exception as e:
                    response_body["experiences"] = []

                # forth query to get multiple achievements
                try:
                    query4 = f"""
                    tableland read "
                    SELECT
                        institute_name,degree,filed_of_study,start_date as edu_start_date,end_date as edu_end_date,score,description as edu_description
                    FROM
                        {education_table}
                    WHERE
                        login_id = '{login_id}'"
                    """
                    data3 = subprocess.check_output([query4], shell=True)
                    final_data4 = json.loads(data3.decode("utf-8"))
                    body1 = {}
                    final_list1 = []
                    for i in range(len(final_data4["rows"])):
                        for j in range(len(final_data4["rows"][0])):
                            body1[final_data4["columns"][j]["name"]] = final_data4[
                                "rows"
                            ][0][j]
                        final_list1.append(body1)
                    response_body["education details"] = final_list1
                except Exception as e:
                    response_body["education details"] = []
                return response_body

            # for company
            elif role[0].lower() == "company":
                fields = "(company_id)"
                tablename = os.environ.get("company_table")
                sector_table = os.environ.get("sector")
                company_sector_table = os.environ.get("company_sectors")
                condition = f"""wallet_address='{walletAddress}'"""
                id_data = select_query(fields, tablename, condition)
                final_id_data = json.loads(id_data.decode("utf-8"))
                company_id = final_id_data["rows"][0][0]
                query = f"""
                tableland read "
                SELECT
                    *
                FROM
                    {tablename}
                WHERE
                    company_id = '{company_id}'"
                """
                data = subprocess.check_output([query], shell=True)
                final_data = json.loads(data.decode("utf-8"))
                response_body = {}
                for i in range(len(final_data["rows"][0])):
                    response_body[final_data["columns"][i]["name"]] = final_data[
                        "rows"
                    ][0][i]

                fields1 = "(sector_id)"
                condition1 = f"""company_id='{company_id}'"""
                id_data1 = select_query(fields1, company_sector_table, condition1)
                final_id_data1 = json.loads(id_data1.decode("utf-8"))
                list_ = final_id_data1["rows"]
                flatList = []
                for element in list_:
                    if type(element) is list:
                        # Check if type is list than iterate through the sublist
                        for item in element:
                            flatList.append(item)
                    else:
                        flatList.append(element)
                list_sector_id = list(set(flatList))
                response_body["sectors"] = []
                for sector_id in list_sector_id:
                    query1 = f"""
                    tableland read "
                    SELECT
                        *
                    FROM
                        {sector_table}
                    WHERE
                        sector_id = '{sector_id}'"
                    """
                    data1 = subprocess.check_output([query1], shell=True)
                    final_data1 = json.loads(data1.decode("utf-8"))
                    try:
                        response_body["sectors"].append(final_data1["rows"][0][1])
                    except Exception as e:
                        print(e)
                return response_body
        except Exception as e:
            print(str(e))
            return {"message": "User does not exists !"}, 400
    except Exception as e:
        print(str(e))
        return {"message": str(e)}, 500


def getWalletRole(walletAddress):
    fields = "(role)"
    tablename = os.environ.get("login_table")
    condition = f"""walletaddress='{walletAddress}'"""
    data = select_query(fields, tablename, condition)
    final_data = json.loads(data.decode("utf-8"))
    try:
        return final_data["rows"][0]
    except:
        return None


# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Add Global Questions
@app.route("/addGlobalQuestions", methods=["POST"])
def addGlobalQuestions():
    try:
        # get verification table details from id
        verification_id = request.json["verification_id"]
        to_be_varified_question_table = os.environ.get("to_be_verified_question")
        query = f"""
                    tableland read "
                    SELECT
                        *
                    FROM
                        {to_be_varified_question_table}
                    WHERE
                        verification_id = '{verification_id}'"
                    """
        data = subprocess.check_output([query], shell=True)
        verified_final_data = json.loads(data.decode("utf-8"))
        print(verified_final_data)

        # get question details using question_id
        creators_question_table = os.environ.get("creators_question")
        query = f"""
                    tableland read "
                    SELECT
                        *
                    FROM
                        {creators_question_table}
                    WHERE
                        creators_question_id = '{verified_final_data["rows"][0][2]}'"
                    """
        data = subprocess.check_output([query], shell=True)
        print(data)
        final_data = json.loads(data.decode("utf-8"))

        # add data into global question table
        global_question_id = os.environ.get("global_question")
        fields = "(creators_id,creators_question_id,question,option1,option2,option3,option4,option5,answer,solution,added_at,difficulty_level,primary_tags,secondary_tags,verifier_name,genuineness_score)"
        verifier_name = request.json["verifier_name"]
        score = int(
            (verified_final_data["rows"][0][2] * 100)
            / verified_final_data["rows"][0][4]
        )
        print(score)
        values = f"""({final_data["rows"][0][1]},{final_data["rows"][0][1]},'{final_data["rows"][0][2]}','{final_data["rows"][0][3]}',
        '{final_data["rows"][0][4]}','{final_data["rows"][0][5]}','{final_data["rows"][0][6]}','{final_data["rows"][0][7]}',
        '{final_data["rows"][0][8]}','{final_data["rows"][0][9]}',{final_data["rows"][0][13]},'{final_data["rows"][0][14]}',
        '{final_data["rows"][0][10]}','{final_data["rows"][0][11]}','{verifier_name}',{score})"""
        data = insert_query(global_question_id, fields, values)
        response_body = {
            "status": 200,
            "data": "User's Record Added Successfully !",
        }, 200
        return response_body
    except Exception as e:
        print(e)
        response_body = {"status": 500}, 500
        return response_body


# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Add into to_be_verified_question table
@app.route("/toBeVerified", methods=["POST"])
def addVerified():
    try:
        creators_question_id = request.json["creators_question_id"]
        creators_questions_table_name = request.json["creators_questions_table_name"]
        to_be_verified_question_table = os.environ.get("to_be_verified_question")
        fields = "(creators_question_id,creator_question_table_name,approval_count,disapproval_count)"
        values = (
            f"""({creators_question_id},'{creators_questions_table_name}',{0},{0})"""
        )
        data = insert_query(to_be_verified_question_table, fields, values)
        response_body = {
            "status": 200,
            "data": "User's Record Added Successfully !",
        }, 200
        return response_body
    except Exception as e:
        print(e)
        response_body = {"status": 500}, 500
        return response_body


# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Add approval count
@app.route("/addApprovalCount", methods=["POST"])
def addApprovalCount():
    try:
        verification_id = request.json["verification_id"]
        to_be_verified_question_table = os.environ.get("to_be_verified_question")
        fields = "(approval_count)"
        condition = f"""verification_id='{verification_id}'"""
        id_data = select_query(fields, to_be_verified_question_table, condition)
        final_id_data = json.loads(id_data.decode("utf-8"))
        add_count = final_id_data["rows"][0][0] + 1
        fields1 = {"approval_count": f"{add_count}"}
        added_data = update_query(to_be_verified_question_table, fields1, condition)
        final_id_data = json.loads(added_data.decode("utf-8"))
        response_body = {
            "status": 200,
            "data": "User's Record Added Successfully !",
        }, 200
        return response_body
    except Exception as e:
        print(e)
        response_body = {"status": 500}, 500
        return response_body


# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Add approval count
@app.route("/addDisapprovalCount", methods=["POST"])
def addDisapprovalCount():
    try:
        verification_id = request.json["verification_id"]
        to_be_verified_question_table = os.environ.get("to_be_verified_question")
        fields = "(disapproval_count)"
        condition = f"""verification_id='{verification_id}'"""
        id_data = select_query(fields, to_be_verified_question_table, condition)
        final_id_data = json.loads(id_data.decode("utf-8"))
        add_count = final_id_data["rows"][0][0] + 1
        fields1 = {"disapproval_count": f"{add_count}"}
        added_data = update_query(to_be_verified_question_table, fields1, condition)
        final_id_data = json.loads(added_data.decode("utf-8"))
        response_body = {
            "status": 200,
            "data": "User's Record Added Successfully !",
        }, 200
        return response_body
    except Exception as e:
        print(e)
        response_body = {"status": 500}, 500
        return response_body


# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Add job
@app.route("/addJob", methods=["POST"])
def addJob():
    try:
        company_id = request.json["company_id"]
        title = request.json["title"]
        description = request.json["description"]
        location = request.json["location"]
        type = request.json["type"]
        addition_question = request.json["addition_question"]
        experience_level = request.json["experience_level"]
        primary_skill1 = request.json["primary_skill1"]
        primary_skill2 = request.json["primary_skill2"]
        primary_skill3 = request.json["primary_skill3"]
        primary_skill4 = request.json["primary_skill4"]
        primary_skill5 = request.json["primary_skill5"]
        secondary_skills = request.json["secondary_skills"]
        final_skills = ",".join(str(bit) for bit in secondary_skills)
        final_location = ",".join(str(bit) for bit in location)
        created_at = int(datetime.datetime.now().timestamp())
        job_table = os.environ.get("job_table")
        fields = "(company_id,title,description,location,status,type,addition_question,experience_level,created_at,primary_skill1,primary_skill2,primary_skill3,primary_skill4,primary_skill5,secondary_skills)"
        values = f"""({company_id},'{title}','{description}','{final_location}',{1},'{type}','{addition_question}','{experience_level}',{created_at},'{primary_skill1}','{primary_skill2}','{primary_skill3}','{primary_skill4}','{primary_skill5}','{final_skills}');"""
        data = insert_query(job_table, fields, values)
        fields = "(job_id)"
        condition = f"""created_at={created_at} and company_id={company_id}"""
        id_data = select_query(fields, job_table, condition)
        final_id_data = json.loads(id_data.decode("utf-8"))
        response_body = {
            "status": 200,
            "data": "User's Record Added Successfully !",
            "job_id": final_id_data["rows"][0][0],
        }, 200
        return response_body
    except Exception as e:
        print(e)
        response_body = {"status": 500}, 500
        return response_body


# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Update job
@app.route("/updateJob", methods=["POST"])
def updateJob():
    try:
        job_id = request.json["job_id"]
        location = request.json["location"]
        status = request.json["status"]
        type = request.json["type"]
        job_table = os.environ.get("job_table")
        condition = f"""job_id='{job_id}'"""
        print(status)
        fields1 = {}
        if location:
            fields1["location"] = f"{location}"
        if status == 1:
            fields1["status"] = 1
        elif status == 0:
            fields1["status"] = 0
        if type:
            fields1["type"] = f"{type}"

        added_data = update_query(job_table, fields1, condition)
        final_id_data = json.loads(added_data.decode("utf-8"))
        print(final_id_data)
        response_body = {
            "status": 200,
            "data": "User's Record updated Successfully !",
        }, 200
        return response_body
    except Exception as e:
        print(e)
        response_body = {"status": 500}, 500
        return response_body


# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Update job Assessment id
@app.route("/addJobAssessment", methods=["POST"])
def addJobAssessment():
    try:
        job_id = request.json["job_id"]
        assesment_id = request.json["assesment_id"]
        job_table = os.environ.get("job_table")
        condition = f"""job_id='{job_id}'"""
        fields = {"assesment_id": f"{assesment_id}"}
        added_data = update_query(job_table, fields, condition)
        final_id_data = json.loads(added_data.decode("utf-8"))
        response_body = {
            "status": 200,
            "data": "User's Record updated Successfully !",
        }, 200
        return response_body
    except Exception as e:
        print(e)
        response_body = {"status": 500}, 500
        return response_body


# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Add job application
@app.route("/addJobApplication", methods=["POST"])
def addJobApplication():
    try:
        candidate_id = request.json["candidate_id"]
        job_id = request.json["job_id"]
        ans_of_addition_q = request.json["ans_of_addition_q"]
        resume_cid = request.json["resume_cid"]
        cover_latter = request.json["cover_latter"]
        assesment_log_id = request.json["assesment_log_id"]
        schedule_interview = request.json["schedule_interview"]
        job_table = os.environ.get("application_details")
        fields = "(candidate_id,job_id,ans_of_addition_q,resume_cid,cover_latter,assesment_log_id,status,schedule_interview)"
        values = f"""({candidate_id},{job_id},'{ans_of_addition_q}','{resume_cid}','{cover_latter}',{assesment_log_id},{0},{schedule_interview});"""
        data = insert_query(job_table, fields, values)
        response_body = {
            "status": 200,
            "data": "User's Record Added Successfully !",
        }, 200
        return response_body
    except Exception as e:
        print(e)
        response_body = {"status": 500}, 500
        return response_body


# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Update approve/disapprove in job application
@app.route("/updateApproveDisapprove", methods=["POST"])
def updateApproveDisapprove():
    try:
        application_id = request.json["application_id"]
        status = request.json["status"]
        application_details = os.environ.get("application_details")
        condition = f"""application_id='{application_id}'"""
        fields1 = {}
        if status == 1:
            fields1["status"] = 1
        else:
            fields1["status"] = 0
        added_data = update_query(application_details, fields1, condition)
        final_id_data = json.loads(added_data.decode("utf-8"))
        print(final_id_data)
        response_body = {
            "status": 200,
            "data": "User's Record Added Successfully !",
        }, 200
        return response_body
    except Exception as e:
        print(e)
        response_body = {"status": 500}, 500
        return response_body


# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Add schedule interview details
@app.route("/addInterview", methods=["POST"])
def addInterview():
    try:
        job_id = request.json["job_id"]
        candidate_id = request.json["candidate_id"]
        interview_time = request.json["interview_time"]
        company_id = request.json["company_id"]
        added_at = request.json["added_at"]
        name = request.json["name"]
        interview_table = os.environ.get("interview")
        fields = "(job_id,candidate_id,interview_time,company_id,added_at)"
        values = (
            f"""({job_id},{candidate_id},{interview_time},{company_id},{added_at});"""
        )
        data = insert_query(interview_table, fields, values)
        response_body = {
            "status": 200,
            "data": "User's Record Added Successfully !",
        }, 200

        # take login data from candidate table
        fields1 = "(login_id)"
        candidate_table = os.environ.get("candidate_table")
        condition1 = f"""candidate_id='{candidate_id}'"""
        data1 = select_query(fields1, candidate_table, condition1)
        final_data1 = json.loads(data1.decode("utf-8"))
        loginId = final_data1["rows"][0][0]

        # take email from login table
        fields1 = "(email)"
        login_table = os.environ.get("login_table")
        condition2 = f"""loginid='{loginId}'"""
        data2 = select_query(fields1, login_table, condition2)
        final_data2 = json.loads(data2.decode("utf-8"))
        client_mail = final_data2["rows"][0][0]

        # take company name using company_id
        fields1 = "(name)"
        company_table = os.environ.get("company_table")
        condition3 = f"""company_id='{company_id}'"""
        data3 = select_query(fields1, company_table, condition3)
        final_data3 = json.loads(data3.decode("utf-8"))
        company_name = final_data3["rows"][0][0]

        # Invoking smtp to send mail
        smtp.starttls()
        smtp.login(os.environ.get("APP_MAIL"), os.environ.get("APP_PASSWORD"))

        msg = MIMEMultipart("alternative")
        msg["Subject"] = "Dehitas email verification."
        msg["From"] = os.environ.get("APP_MAIL")
        msg["To"] = "bhumi.lamprostech@gmail.com"

        epochtime = interview_time
        scheduled_time = datetime.datetime.fromtimestamp(epochtime)
        print(scheduled_time)
        html = f"""
            Hi {name},<br/>
                <p>We thank you for applying to '{company_name}'. We want to invite you for an interview on {scheduled_time}</p><br/>.
                Thank You,<br/>
                Team DEHITAS
        """
        print(html)
        part1 = MIMEText(html, "html")

        msg.attach(part1)

        smtp.sendmail(os.environ.get("APP_MAIL"), client_mail, msg.as_string())
        smtp.close()
        return response_body

    except Exception as e:
        print(e)
        response_body = {"status": 500}, 500
        return response_body


# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Add into to_be_verified_question table
@app.route("/addCreatorAssessment", methods=["POST"])
def addCreatorAssessment():
    try:
        creators_id = request.json["creators_id"]
        title = request.json["title"]
        fixed_cost = request.json["fixed_cost"]
        variable_cost = request.json["variable_cost"]
        duration = request.json["duration"]
        question = request.json["question"]
        number_of_question = request.json["number_of_question"]
        created_at = request.json["created_at"]
        experiance_level = request.json["experiance_level"]
        primary_skill1 = request.json["primary_skill1"]
        primary_skill2 = request.json["primary_skill2"]
        primary_skill3 = request.json["primary_skill3"]
        secondary_skills = request.json["secondary_skills"]
        final_skills = ",".join(str(bit) for bit in secondary_skills)
        creators_assesment_table = os.environ.get("creators_assesment_table")
        fields = "(creators_id,title,fixed_cost,variable_cost,duration,question,number_of_question,created_at,experiance_level,primary_skill1,primary_skill2,primary_skill3,secondary_skills)"
        values = f"""({creators_id},'{title}',{fixed_cost},{variable_cost},{duration},'{question}',{number_of_question},{created_at},{experiance_level},'{primary_skill1}','{primary_skill2}','{primary_skill3}','{final_skills}');"""
        data = insert_query(creators_assesment_table, fields, values)

        # get assessment id
        fields1 = "(assesment_id)"
        creators_assesment_table = os.environ.get("creators_assesment_table")
        condition1 = f"""creators_id='{creators_id}' and created_at={created_at}"""
        data1 = select_query(fields1, creators_assesment_table, condition1)
        final_data1 = json.loads(data1.decode("utf-8"))
        assessment_id = final_data1["rows"][0][0]
        print(assessment_id)

        # insert data into assessment log table
        # current_time = datetime.datetime.now().timestamp()
        # print(current_time)
        assesment_logs = os.environ.get("assesment_logs")
        fields = "(assesment_id,event,creator_id,added_at)"
        values = f"""({assessment_id},'created',{creators_id},{int(datetime.datetime.now().timestamp())});"""
        data = insert_query(assesment_logs, fields, values)
        response_body = {
            "status": 200,
            "data": "User's Record Added Successfully !",
        }, 200

        return response_body
    except Exception as e:
        print(e)
        response_body = {"status": 500}, 500
        return response_body


# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Get id using wallet address
@app.route("/getId", methods=["POST"])
def getId():
    try:
        walletAddress = request.json["walletaddress"]
        role = getWalletRole(walletAddress)
        try:
            if role[0].lower() == "company":
                fields = "(company_id)"
                company_table = os.environ.get("company_table")
                condition = f"""wallet_address='{walletAddress}'"""
                id_data = select_query(fields, company_table, condition)
                final_id_data = json.loads(id_data.decode("utf-8"))
                final_data = {}
                final_data[final_id_data["columns"][0]["name"]] = final_id_data["rows"][
                    0
                ][0]
            elif role[0].lower() == "candidate":
                fields = "(candidate_id)"
                candidate_table = os.environ.get("candidate_table")
                condition = f"""wallet_address='{walletAddress}'"""
                id_data = select_query(fields, candidate_table, condition)
                final_id_data = json.loads(id_data.decode("utf-8"))
                final_data = {}
                final_data[final_id_data["columns"][0]["name"]] = final_id_data["rows"][
                    0
                ][0]
            elif role[0].lower() == "creator":
                fields = "(creator_id)"
                creators_table = os.environ.get("creators_table")
                condition = f"""wallet_address='{walletAddress}'"""
                id_data = select_query(fields, creators_table, condition)
                final_id_data = json.loads(id_data.decode("utf-8"))
                final_data = {}
                final_data[final_id_data["columns"][0]["name"]] = final_id_data["rows"][
                    0
                ][0]
            return final_data
        except Exception as e:
            print(str(e))
            return {"message": "no user with this address"}, 500
    except Exception as e:
        print(str(e))
        return {"message": "no user with this address"}, 500


# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Get stage
@app.route("/getStage", methods=["GET"])
def getStage():
    try:
        walletaddress = request.args["walletaddress"]
        fields = "*"
        login_table = os.environ.get("login_table")
        condition = f"""walletaddress='{walletaddress}'"""
        id_data = select_query(fields, login_table, condition)
        final_id_data = json.loads(id_data.decode("utf-8"))
        try:
            if final_id_data["rows"][0][3]:
                if final_id_data["rows"][0][0]:
                    if final_id_data["rows"][0][6]:
                        role = getWalletRole(walletaddress)
                        if role[0].lower() == "company":
                            fields = "*"
                            company_table = os.environ.get("company_table")
                            condition = f"""wallet_address='{walletaddress}'"""
                            id_data = select_query(fields, company_table, condition)
                            final__data = json.loads(id_data.decode("utf-8"))
                            final_data = {}
                            if final__data["rows"] == []:
                                final_data["role"] = role[0]
                                final_data["stage"] = 3
                            else:
                                final_data[
                                    final__data["columns"][0]["name"]
                                ] = final__data["rows"][0][0]
                                final_data[
                                    final__data["columns"][2]["name"]
                                ] = final__data["rows"][0][2]
                                final_data["stage"] = 4
                                final_data["role"] = role[0]
                        elif role[0].lower() == "candidate":
                            fields = "*"
                            candidate_table = os.environ.get("candidate_table")
                            condition = f"""wallet_address='{walletaddress}'"""
                            id_data = select_query(fields, candidate_table, condition)
                            final__data = json.loads(id_data.decode("utf-8"))
                            final_data = {}
                            if final__data["rows"] == []:
                                final_data["role"] = role[0]
                                final_data["stage"] = 3
                            else:
                                final_data[
                                    final__data["columns"][0]["name"]
                                ] = final__data["rows"][0][0]
                                final_data[
                                    final__data["columns"][2]["name"]
                                ] = final__data["rows"][0][2]
                                final_data["stage"] = 4
                                final_data["role"] = role[0]
                        elif role[0].lower() == "creator":
                            fields = "*"
                            creators_table = os.environ.get("creators_table")
                            condition = f"""wallet_address='{walletaddress}'"""
                            id_data = select_query(fields, creators_table, condition)
                            final__data = json.loads(id_data.decode("utf-8"))
                            final_data = {}
                            if final__data["rows"] == []:
                                final_data["role"] = role[0]
                                final_data["stage"] = 3
                            else:
                                final_data[
                                    final__data["columns"][0]["name"]
                                ] = final__data["rows"][0][0]
                                final_data[
                                    final__data["columns"][3]["name"]
                                ] = final__data["rows"][0][3]
                                final_data["stage"] = 4
                                final_data["role"] = role[0]
                        print("hey")
                        final_data["login_id"] = final_id_data["rows"][0][0]
                        return final_data
                    else:
                        return {"login_id": final_id_data["rows"][0][0], "stage": 2}
                else:
                    return {"stage": 1}
        except Exception as e:
            return {"stage": 0}
    except Exception as e:
        print(e)
        response_body = {"status": 500}, 500
        return response_body


# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Get Role Of User By Address
@app.route("/getRole", methods=["POST"])
def getRole():
    walletAddress = request.json["walletAddress"]
    role = getWalletRole(walletAddress)
    if role:
        response_body = {"status": 200, "data": {"role": role}}
    else:
        response_body = {"status": 404, "data": {"role": role}}
    return response_body


# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Get Login Id Of User By Address
@app.route("/getLoginId", methods=["GET"])
def getLoginId():
    walletAddress = request.json["walletAddress"]
    fields = "(loginid)"
    tablename = os.environ.get("login_table")
    condition = f"""walletAddress='{walletAddress}'"""
    data = select_query(fields, tablename, condition)
    final_data = json.loads(data.decode("utf-8"))
    print(final_data)

    try:
        loginId = final_data["rows"][0]
    except:
        loginId = None
    response_body = {"status": 200, "data": {"loginId": loginId}}
    return response_body


# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Registration of User
@app.route("/registration", methods=["POST"])
def registration():
    try:
        walletAddress = request.json["wallet_address"]
        role = getWalletRole(walletAddress)
        if role[0].lower() == "candidate":
            data = (
                request.json["login_id"],
                request.json["name"],
                request.json["bio"],
                request.json["profile_image"],
                request.json["cover_image"],
                walletAddress,
                request.json["address"],
                request.json["country"],
                request.json["contact_number"],
            )
        if role[0].lower() == "company":
            data = (
                request.json["login_id"],
                request.json["name"],
                request.json["logo"],
                request.json["cover_image"],
                walletAddress,
                request.json["description"],
                request.json["company_url"],
                request.json["year_of_establishment"],
                request.json["number_of_employees"],
                request.json["address"],
                request.json["contry"],
                request.json["contact_number"],
            )

        if role[0].lower() == "creator":
            data = (
                request.json["login_id"],
                request.json["wallet_address"],
                request.json["name"],
                request.json["bio"],
                request.json["profile_image"],
                request.json["cover_image"],
                request.json["address"],
                request.json["country"],
                request.json["contact_number"],
            )

        role_functions = {
            "candidate": "candidate_registration",
            "creator": "creator_registration",
            "company": "company_registration",
        }
        print(data)
        data_ = eval(role_functions[role[0]] + str(f"({data})"))
        print(data_)
        response_body = {"status": 200, "data": "Inserted Succesfully !"}, 200
    except Exception as e:
        response_body = {"status": 501, "data": str(e)}, 404
    return response_body


if __name__ == "__main__":
    app.run(debug=True, port=5000, host="0.0.0.0")
