from dataclasses import fields
from dotenv import load_dotenv
import os
from queries import *
import datetime
import json
from flask import Blueprint, render_template, abort

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
