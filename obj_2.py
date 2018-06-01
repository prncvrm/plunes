## plunes intern assignment objective : 2
## author : Prince Verma
## date : 02/06/18 00:00:00
## version : 1.0

import sys,glob
import os
import re
import os,time,argparse
from glob import glob
parser=argparse.ArgumentParser(description="Change $sql to function_passed $sql /variable recursively in all files")
parser.add_argument('-p','--path',dest='_path',help="Enter parent folder name/path (case-sensitive)", required=True)
args=parser.parse_args()
PATH=args._path
files = [y for x in os.walk(PATH) for y in glob(os.path.join(x[0], '*.php'))]
if(files==[]):
	print("no php files found, recheck path")
	exit(1)
print("Enter php variable to be searched for, eg : $sql")
_sql=input()
print("Enter complete function name to be replace with, eg :function_name($sql)")
_test_function=input()
print("-"*100)
print("Processing")
start=time.time()
for file in files:
	with open(file,"r+") as fp:
		file_contents=fp.read() #reading contents of file
		reg = re.findall(r"([(]+[\w|\d|\s|$|,|'|\"|!|\-|\[|\]|_|\(|\)|.\u00A9|:]*[)]+)+",file_contents) #regex lol
		for _re in reg:
			str_replace=_re.replace(_sql,_test_function)
			file_contents=file_contents.replace(_re,str_replace)
		fp.seek(0) #pointer at 0 index
		fp.write(file_contents) #writing new data
		fp.truncate()
		fp.close()
end=time.time()
print("-"*100)
print("Done in "+str(end-start)+" seconds")