import subprocess
import sys
import re

def select_query(fields,tablename, condition):
    if(condition):
        query = """
                tableland read "Select """ + fields + """ from """+ tablename + """ WHERE """ + condition + """ ;"
                """
    else:            
        query =  f"""
                tableland read "Select {fields} from { tablename } ;"
                """
    data = subprocess.check_output([query], shell=True)
    return data
    

def insert_query(tablename, fields ,values):
    query = f"""
            tableland write "INSERT INTO {tablename} {fields} VALUES { values }"
            """
    print(query)
    data = subprocess.check_output([query], shell=True)
    return data

def update_query(tablename, fields ,condition):
    query = f"""
            tableland write "UPDATE {tablename} SET {fields} WHERE { condition }"
            """
    print(query)
    data = subprocess.check_output([query], shell=True)
    return data
