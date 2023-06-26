# [Disclosure for CVE-2023-29656]

Vulnerability ID: CVE-2023-29656

Title: Authorization Issue associated with Darktrace Mobile App

Abstract:
An authorization issue associated with the Darktrace Mobile App has been identified. If running affected Darktrace Threat Visualiser versions, this vulnerability could prevent users disabled during that time from having their Mobile App session automatically ended, allowing them to retain access to the app. Successful exploitation of the vulnerability could lead to unauthorized actions and information disclosure. The vendor, Darktrace, was notified of this issue, which was resolved in a subsequent release.

Details:
- Vulnerability Type: Improper Authorization
- Vendor: Darktrace
- Product: Darktrace Threat Visualiser
- Affected Component: Threat Visualiser
- Version: Affected versions between 6.0.0 and 6.0.15
- Impact: Potential unauthorized actions and information disclosure

Description:
The Darktrace Mobile App is designed to provide users with mobile access to their Darktrace deployment. With the correct permissions, Mobile App allows users to view and action Darktrace alerts. However, an authorization issue in affected Darktrace Threat Visualiser versions has been identified, allowing disabled users to continue accessing the Darktrace Mobile App. This issue arises when a previously authorized user is disabled in Darktrace Threat Visualiser, but continues to use the Mobile App. The impact is that these disabled users can log in and access sensitive information, perform actions, and view data within the app.

Proof of Concept:
To demonstrate this vulnerability, follow the steps below on an affected version:
1. Log in to the Darktrace web console.
2. Install the Darktrace Mobile App on the mobile phone.
3. Authorize the Mobile App using a valid Threat Visualiser user account.
4. Request the Threat Visualiser user account to be disabled by a user with higher privileges.
5. After the account has been disabled, log on to the Mobile App, where it can be observed that previous Mobile App privileges are still operational.

Impact:
The impact of this authorization issue is significant as it allows unauthorized individuals to access the Darktrace Mobile App. This can lead to unauthorized actions and potential exposure of sensitive information. Users who previously had access to the Darktrace deployment but had their access disabled should not have access to the Mobile App's full functionality.
•	Information Disclosure: Successful exploitation of this vulnerability could expose sensitive information due to improper authorization controls.
•	Denial of Service: The vulnerability can lead to an unauthorized user being able to activate pending RESPOND Actions. In cases where those have been configured to be far-reaching by an authorized user, this could lead to the blocking of all ingress or egress traffic in the infrastructure where Darktrace agents are deployed.


Attack Vectors:
•	A user who is disabled from the central Darktrace Threat Visualiser Web Console can still fully use the Mobile App and its functionalities.


Vendor Response:
Darktrace has acknowledged and confirmed the vulnerability. Darktrace has confirmed the affected versions to be between 6.0.0 and 6.0.15. Users are advised to update to the latest version of Darktrace Threat Visualiser.


Discoverer:
The vulnerability was discovered and reported by Marius “Rami” Petrea.

Timeline : 
-	Reported to “vulnerability-disclosure@darktrace.com“ on Feb 24, at 14:26 GMT +3
-	Got the first ack answer on Feb 24, at 19:09 GMT +3 
-	On Feb 28, 18:20 GMT +3, got another follow-up email from Darktrace informing me that they’re working on a fix.
-	On Mar 2, Darktrace confirmed that a patch was in place.
-	On May 16, 18:27 GMT +3, communication between Darktrace and Marius Petrea to collaborate on the detail required to submit CVE detail.

Note:
This disclosure paper is intended to raise awareness about the identified vulnerability and encourage the vendor to take appropriate actions to address the issue. It is important to adhere to responsible disclosure practices and work collaboratively with the vendor to ensure timely mitigation.

Please note that this is a sample disclosure paper and should be adapted as per your requirements and the specific guidelines provided by the vulnerability disclosure program or platform you intend to use for public disclosure.
