from termios import TAB1
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
# Get Role Of User By Address
@app.route("/getProfile", methods=["GET"])
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
                        body[final_data3["columns"][j]["name"]] = final_data3["rows"][
                            0
                        ][j]
                    final_list.append(body)
                response_body["experiences"] = final_list

                # forth query to get multiple achievements
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
                        body1[final_data4["columns"][j]["name"]] = final_data4["rows"][
                            0
                        ][j]
                    final_list1.append(body1)
                response_body["achievements"] = final_list1
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
                        print(e)

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
                        body[final_data3["columns"][j]["name"]] = final_data3["rows"][
                            0
                        ][j]
                    final_list.append(body)
                response_body["experiences"] = final_list

                # forth query to get multiple achievements
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
                        body1[final_data4["columns"][j]["name"]] = final_data4["rows"][
                            0
                        ][j]
                    final_list1.append(body1)
                response_body["education details"] = final_list1
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
            return {"message": str(e)}, 500
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
# Get Role Of User By Address
@app.route("/getRole", methods=["GET"])
def getRole():
    walletAddress = request.json["walletAddress"]
    role = getWalletRole(walletAddress)
    response_body = {"status": 200, "data": {"role": role}}
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
        if role[0] == "Candidate":
            data = (
                request.json["loginId"],
                request.json["name"],
                request.json["bio"],
                request.json["profileImage"],
                request.json["coverImage"],
                walletAddress,
                request.json["address"],
                request.json["country"],
                request.json["contactNumber"],
            )

        if role[0] == "Company":
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
                request.json["contect_number"],
            )

        if role[0] == "Creator":
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
            "Candidate": "candidate_registration",
            "Creator": "creator_registration",
            "Company": "company_registration",
        }
        data_ = eval(str(role_functions[role[0]]) + str(f"({data})"))
        print(data_)
        response_body = {"status": 200, "data": data_}, 200
    except Exception as e:
        response_body = {"status": 501, "data": str(e)}, 501
    return response_body


if __name__ == "__main__":
    app.run(debug=True, port=5000, host="0.0.0.0")
