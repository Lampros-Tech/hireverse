import subprocess
import pandas as pd
import csv
import datetime

with open("Question_Bank - Sheet1.csv") as csv_file:
    # read the csv file
    csv_reader = csv.reader(csv_file)

    # now we can use this csv files into the pandas
    df = pd.DataFrame([csv_reader], index=None)
noOfRows = df.shape[1]
wallet = "0xfaabb044AF5C19145cA4AE13CA12C419395A72FB"
for i in range(1, noOfRows):
    for val in list(df[i]):
        # print(val)
        query = f"""
        tableland write "
        insert into creators_question_table_80001_2586 (wallet_address,question,option1,option2,option3,option4,option5,answer,solution,
        added_at,primary_tag,secondary_tags,nation_list,difficulty_level,repo_name,privacy) values ('{wallet}','{val[2]}','{val[3]}',
        '{val[4]}','{val[5]}','{val[6]}','{val[7]}','{val[8]}','{val[9]}',{int(datetime.datetime.now().timestamp())},'{val[14]}','{val[15]}',
        '{val[16]}','{val[17]}','{val[18]}',{val[19]})"
        """
        data = subprocess.check_output([query], shell=True)
