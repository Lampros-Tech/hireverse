from dataclasses import fields
from dotenv import load_dotenv
import os
from queries import *
import datetime
import json
from flask import Blueprint, render_template, abort

load_dotenv()

candidate = Blueprint('candidate', __name__)


def candidate_registration(data):
    try:
        fields = '*'
        tablename = os.environ['candidate_table']
        #Checking If the Address is Exists Or Not
        condition =  f"""wallet_address='{data[5]}'"""
        data = select_query(fields,tablename, condition)
        final_data = json.loads(data.decode('utf-8'))
        if(len(final_data['rows']) == 0):
            tablename = os.environ['candidate_table']
            fields = "(login_id, name, bio, profile_image, cover_image, wallet_address, address, country, contect_number, created_at, modified_at)"
            values = data + (int(datetime.datetime.now().timestamp()), int(datetime.datetime.now().timestamp()))
            data = insert_query(tablename, fields ,values)
            return "Registration Successfully !"
        else:
            return "Registration is already done !"

    except Exception as e:
        return e    


@candidate.route('/candidate/test')
def test():
    return 'This is my first API call!',200
