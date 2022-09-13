from crypt import methods
from dataclasses import fields
from dotenv import load_dotenv
import os
from queries import *
import datetime
import json
from flask import Blueprint, render_template, abort
from flask.globals import request

load_dotenv()

company = Blueprint('company', __name__)

# data = ["company_id", "login_id,name,logo,cover_image,wallet_address,description,company_url,year_of_establishment,number_of_employees,address,contry,contect_number,created_at,modified_at"]


def company_registration(company_data):
    try:
        fields = '*'
        tablename = os.environ['company_table']
        # Checking If the Address is Exists Or Not
        condition = f"""wallet_address='{company_data[5]}'"""
        data = select_query(fields, tablename, condition)
        final_data = json.loads(data.decode('utf-8'))
        print(final_data)
        if (len(final_data['rows']) == 0):
            tablename = os.environ['company_table']
            fields = "(login_id,name,logo,cover_image,wallet_address,description,company_url,year_of_establishment,number_of_employees,address,contry,contect_number,created_at,modified_at)"
            values = company_data + (int(datetime.datetime.now().timestamp()),
                             int(datetime.datetime.now().timestamp()))
            data = insert_query(tablename, fields, values)
            return "Registration Successfully !"
        else:
            return "Registration is already done !", 409

    except Exception as e:
        return e

# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Update Company Details
@company.route('/company/update', methods=['POST'])
def update():
    try:
        update_values = request.json['data']
        # print(update_values)
        walletAddress = request.json['walletAddress']        
        tablename = os.environ['company_table']
        condition = f"""wallet_address='{walletAddress}'"""
        data = update_query(tablename, update_values, condition, True)
        # print(walletAddress)
        return "Data updated successfully!!", 200
    except Exception as e:
        print(e)
        return "Something went wrong !!", 500


# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------
# Update Company Sectors
@company.route('/company/add_sectors', methods=['POST'])
def add_sector():
    name = request.json['name']