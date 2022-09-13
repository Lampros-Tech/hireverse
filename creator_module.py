from dataclasses import fields
from dotenv import load_dotenv
import os
from queries import *
import datetime
import json
from flask import Blueprint, render_template, abort

load_dotenv()

creator = Blueprint('creator', __name__)


def creator_registration(data):
    try:
        fields = '*'
        tablename = os.environ['creator_table']
        # Checking If the Address is Exists Or Not
        condition = f"""wallet_address='{data[5]}'"""
        data = select_query(fields, tablename, condition)
        final_data = json.loads(data.decode('utf-8'))
        if (len(final_data['rows']) == 0):
            tablename = os.environ['creator_table']
            fields = "(login_id, wallet_address, name, bio, profile_image, cover_image, address, country, contact_number, question_table_name, repo_table_name, creators_table)"
            values = data[0:9] + (int(datetime.datetime.now().timestamp()),
                                  int(datetime.datetime.now().timestamp())) + data[9:12]
            print(values)
            data = insert_query(tablename, fields, values)
            return "Registration Successfully !"
        else:
            return "Registration is already done !"

    except Exception as e:
        return e
