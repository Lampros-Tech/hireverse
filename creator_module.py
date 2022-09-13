from dataclasses import fields
from dotenv import load_dotenv
import os
from queries import *
import datetime
import json
from flask import Blueprint, render_template, abort
from flask.globals import request

load_dotenv()

creator = Blueprint('creator', __name__)


def creator_registration(creator_data):
    try:
        fields = '*'
        tablename = os.environ['creators_table']
        # Checking If the Address is Exists Or Not
        condition = f"""wallet_address='{creator_data[1]}'"""
        data = select_query(fields, tablename, condition)
        final_data = json.loads(data.decode('utf-8'))
        print("Inside creators registration:",final_data)
        if (len(final_data['rows']) == 0):
            tablename = os.environ['creators_table']
            fields = "(login_id, wallet_address, name, bio, profile_image, cover_image, address, country, contact_number, created_at, modified_at)"
            values = creator_data + (int(datetime.datetime.now().timestamp()),
                                  int(datetime.datetime.now().timestamp()))
            print(values)
            data = insert_query(tablename, fields, values)
            return "Registration Successfully !"
        else:
            return "Registration is already done !"

    except Exception as e:
        return e


@creator.route('/creator/addTableNames', methods=['POST'])
def addTableNames():
    try:
        update_values = request.json['data']
        # print(update_values)
        walletAddress = request.json['walletAddress']
        tablename = os.environ['creators_table']
        condition = f"""wallet_address='{walletAddress}'"""
        data = update_query(tablename, update_values, condition, True)
        return "Data updated successfully!!", 200
    except Exception as e:
        print(e)
        return "Something went wrong !!", 500
