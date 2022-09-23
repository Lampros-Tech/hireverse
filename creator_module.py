from dataclasses import fields
from dotenv import load_dotenv
import os
from queries import *
import datetime
import json
from flask import Blueprint, render_template, abort
from flask.globals import request
import random
import w3storage

load_dotenv()

creator = Blueprint("creator", __name__)


def creator_registration(creator_data):
    try:
        fields = "*"
        tablename = os.environ.get("creators_table")
        # Checking If the Address is Exists Or Not
        condition = f"""wallet_address='{creator_data[1]}'"""
        data = select_query(fields, tablename, condition)
        final_data = json.loads(data.decode("utf-8"))
        print("Inside creators registration:", final_data)
        if len(final_data["rows"]) == 0:
            tablename = os.environ.get("creators_table")
            fields = "(login_id, wallet_address, name, bio, profile_image, cover_image, address, contry, contect_number, created_at, modified_at)"
            values = creator_data + (
                int(datetime.datetime.now().timestamp()),
                int(datetime.datetime.now().timestamp()),
            )
            print(values)
            data = insert_query(tablename, fields, values)
            return "Registration Successfully !"
        else:
            return "Registration is already done !"

    except Exception as e:
        return e


@creator.route("/creator/addTableNames", methods=["POST"])
def addTableNames():
    try:
        # print(update_values)
        walletAddress = request.json["walletAddress"]
        tablename = os.environ.get("creators_table")
        data = request.json["data"]
        # assesment_table = request.json['assesment_table']
        # repo_table = request.json['repo_table']

        # Check all the columns are empty or not.
        fields = "*"
        condition = f"""wallet_address = '{walletAddress}'"""
        creator_data = select_query(fields, tablename, condition)
        final_data = json.loads(creator_data.decode("utf-8"))
        status_list = []
        if final_data["rows"] == []:
            return {"data": "not exists"}
        else:
            try:
                if data["question_table"]:
                    print(final_data["rows"][0][11])
                    if not final_data["rows"][0][11]:
                        question_update_values = {"question_table": data["question_table"]}
                        condition = f"""wallet_address='{walletAddress}'"""
                        question_table = update_query(
                            tablename, question_update_values, condition
                        )
                        print(question_table)
                        status_list.append("Question table added successfully!!")
                    else:
                        status_list.append("Question table already exists!!")
            except Exception as e:
                print(e)
            try:
                if data["repo_table"]:
                    if not final_data["rows"][0][12]:
                        repo_update_values = {"repo_table": data["repo_table"]}
                        condition = f"""wallet_address='{walletAddress}'"""
                        repo_table = update_query(tablename, repo_update_values, condition)
                        print(repo_table)
                        status_list.append("Repo table added successfully!!")
                    else:
                        status_list.append("Repo table already exists!!")
            except Exception as e:
                print(e)
            # condition = f"""wallet_address='{walletAddress}' AND """
            # data = update_query(tablename, update_values, condition, True)
            return status_list, 200
    except Exception as e:
        print(e)
        return "Something went wrong !!", 500


####################################################################################################################
####################################################################################################################
# Get creator tables


@creator.route("/creator/getTables", methods=["POST"])
def getTables():
    try:
        # print(update_values)
        walletAddress = request.json["walletAddress"]
        tablename = os.environ.get("creators_table")
        fields = "*"
        condition = f"""wallet_address = '{walletAddress}'"""
        creator_data = select_query(fields, tablename, condition)
        final_data = json.loads(creator_data.decode("utf-8"))
        if final_data["rows"] == []:
            return {
                "question_table": "none",
                "repo_table": "none",
            }
        else:
            creator_tables = {
                "question_table": final_data["rows"][0][11],
                "repo_table": final_data["rows"][0][12],
            }
            return creator_tables, 200
    except Exception as e:
        print(e)
        return "Something went wrong !!", 500


#creat Assessment API to create a test 
@creator.route("/creator/createAssessment", methods=["POST"])
def getAssessmentQuestions():
    try:
        #inputs
        walletAddress = request.json["wallet_address"]
        assessment_name = request.json['assessment_name']
        description = request.json['description']
        fixed_cost = request.json['fixed_cost']
        variable_cost = request.json['variable_cost']
        duration = request.json['duration']
        number_of_questions = request.json['number_of_questions']
        experience_level = request.json['experience_level']
        primary_skills = request.json['primary_skills']
        secondary_skills = request.json['secondary_skills']
        question_format = request.json['question_format']

        #selecting table of the creator
        fields = "*"
        tablename = os.environ.get("creators_table")
        condition = f"""wallet_address = '{walletAddress}'"""
        creator_data = select_query(fields, tablename, condition)
        final_data = json.loads(creator_data.decode("utf-8"))
        if final_data["rows"] == []:
            return {
                "msg": "Question Table is not Created",
            },400
        else:
            #runnig query to select the questions
            question_table= final_data["rows"][0][11]
            creator_id = final_data["rows"][0][0]
            question_list = []
            for format in question_format:
                fields = "*"
                condition = f"""repo_name = '{format['repo_name']}' AND difficulty_level='{format['difficulty_level']}' AND primary_tag='{format['genre']}'"""
                creator_questions = select_query(fields, question_table,condition)
                questions = json.loads(creator_questions.decode("utf-8"))
                num_questions = format['to']- format['from'] + 1 
                if len(questions['rows']) >= num_questions:
                    selected_questions = random.sample(questions['rows'],num_questions)
                    for i in selected_questions:
                        question_list.append(i[0])
                    # print(questions['rows'])
                else:
                    response_body = {
                        "status": 200,
                        "data": format['repo_name'] + " repo does not have enough Questions for "+ format['genre'] +" with difficulty level "+ format['difficulty_level'] +"!",
                    }, 200
                    return response_body
            repo_table_name = os.environ.get('creators_assesment_table')
            fields = "(creators_id,title,description,fixed_cost,variable_cost,duration,question,number_of_question,created_at,experiance_level,primary_skill1,primary_skill2,primary_skill3,secondary_skills,question_format)"
            try:
                primary_skill1 = primary_skills[0]
            except:
                print("No primary Skill Available")    
            try:
                primary_skill2 = primary_skills[1]
            except:
                print("No primary Skill-1 Available")    
            try:
                primary_skill3 = primary_skills[2]
            except:
                print("No primary Skill-2 Available") 

            created_at = int(datetime.datetime.now().timestamp())
            w3 = w3storage.API(token=os.environ.get('token'))
            some_uploads = w3.user_uploads(size=25)

            if len(question_list) == number_of_questions:
                cid = w3.post_upload(('format.txt',str(question_format)))
                values = f"""({creator_id},'{assessment_name}','{description}',{fixed_cost},{variable_cost},{duration},'{question_list}',{number_of_questions},{created_at},'{experience_level}','{primary_skill1}','{primary_skill2}','{primary_skill3}','{(',').join(secondary_skills)}','{cid}')"""
                data = insert_query(repo_table_name, fields, values)
                response_body = {
                    "status": 200,
                    "data": "Assessment Created Successfully !",
                }, 200

            else:
                response_body = {
                    "status": 200,
                    "data": "Not enough Questions found !"
                }, 200


        return response_body
    except Exception as e:
        print(e)
        return "Something went wrong !!", 500





####################################################################################################################
####################################################################################################################
# Verify questions before adding it to global questions.


@creator.route("/creator/toBeVerified", methods=["POST"])
def toBeVerified():
    try:
        walletAddress = request.json["walletAddress"]
        print(walletAddress)
        return "Inside to be verified", 200
    except Exception as e:
        print(str(e))
        return "Something went wrong!!!", 500
