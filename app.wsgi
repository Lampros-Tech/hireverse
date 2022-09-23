import logging
import os
import sys
import os
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0, '/home/ubuntu/marketplace_api/api')
from dotenv import load_dotenv
load_dotenv()
os.environ['APP_URL']='http://127.0.0.1:5000'
os.environ['APP_MAIL']='verify.dehitas@gmail.com'
os.environ['APP_PASSWORD']='dmyvwpfpeoiwhoxl'
os.environ['TBL_PRIVATE_KEY']='b2f174428045bfece6d2d830f4b3f48a902b4f8800c7ff10a056cd6c80d3fb71'
os.environ['TBL_CHAIN']='polygon-mumbai'
os.environ['TBL_ALCHEMY']='ALbcNieoFrIRYYNDrcr4dAASXUCZbm-i'
os.environ['login_table']='login_table_80001_1645'
os.environ['creators_table']='creators_table_80001_2155'
os.environ['skill_table']='skill_table_80001_1735'
os.environ['user_skill_table']='user_skill_table_80001_1736'
os.environ['user_experiance_table']='user_experiance_table_80001_1737'
os.environ['user_achivement_table']='user_achivement_table_80001_1738'
os.environ['user_education']='education_table_80001_2259'
os.environ['company_table']='company_table_80001_1730'
os.environ['candidate_table']='candidate_table_80001_1648'
os.environ['creators_repo_table']='creators_repo_table_80001_2587'
os.environ['sector']='sector_table_80001_1777'
os.environ['company_sectors']='company_sector_table_80001_1788'
os.environ['global_question']='global_question_table_80001_2063'
os.environ['domain']='domain_table_80001_1469'
os.environ['question_domain']='question_domain_table_80001_1470'
os.environ['nations']='nation_table_80001_1471'
os.environ['questions_nations']='question_netion_table_80001_1472'
os.environ['creators_question']='creators_question_table_80001_2586'
os.environ['to_be_verified_question']='verification_table_80001_2014'
os.environ['question_log']='question_log_table_80001_1475'
os.environ['creators_assesment_table']='creators_assesment_table_80001_2849'
os.environ['assesment_skill']='assesment_skill_table_80001_1477'
os.environ['job_skill']='job_skill_table_80001_1478'
os.environ['assesment_logs']='assesment_log_table_80001_2088'
os.environ['job_table']='job_table_80001_2018'
os.environ['application_details']='application_details_table_80001_2806'
os.environ['interview']='interview_table_80001_2049'
os.environ['token']='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQyNzdCMDE2NWY5ZkM5ZThhQkI0M0EwYTRjODFhYTk2OERCNERGNDYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjM5MjI2OTM1NjAsIm5hbWUiOiJFdGhPbmxpbmUifQ.OY6RS4zIFfGfEiOacIHdo3BEkFdPDHvd8i4o5fm4JW8'
os.environ['result'] = 'result_table_80001_2805'
from app import app as application