/** 
 * [SIMINOV FRAMEWORK]
 * Copyright [2013] [Siminov Software Solution LLP|support@siminov.com]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/


/**
	It provide Siminov Log features. 
	
	@module Log
*/

/**
	Log Siminov Messages.
	
	@module Log
	@class Log
	@constructor
*/
function Log() {


}



/**
 	Log info messages.

	@method logi 	
 	@static
 	@param className Class Name.
 	@param methodName Method Name.
 	@param message Message.
 */
Log.logi = function(className, methodName, message) {
    console.log("IMPORTANT - " + "CLASS-NAME: " + className + ", METHOD-NAME: " + methodName + ", MESSAGE: " + message);
}



/**
 	Log error messages.

	@method loge 	
 	@static
 	@param className Class Name.
 	@param methodName Method Name.
 	@param message Message.
 */
Log.loge = function(className, methodName, message) {
    console.log("ERROR - " + "CLASS-NAME: " + className + ", METHOD-NAME: " + methodName + ", MESSAGE: " + message);
}



/**
 	Log debug messages.

	@method logd 	
 	@static
 	@param className Class Name.
 	@param methodName Method Name.
 	@param message Message.
 */
Log.logd = function(className, methodName, message) {
    console.log("DEBUG - " + "CLASS-NAME: " + className + ", METHOD-NAME: " + methodName + ", MESSAGE: " + message);
}

