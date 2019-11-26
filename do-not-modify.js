function fetch(url, options) {
    let method = "";
    if(options !== undefined && "method" in options) {
        method = options.method.toLowerCase();
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                json: () => {
                    return Promise.resolve(json(url, method));
                }
            });
        }, 2000);
    });
}

function json(url, method) {
    if((url === "data.json" || url === "/data.json" || url === "./data.json") && method === "post") {
        return getData();
    }

    return Promise.resolve({"status": "failed"});
}

function getData() {
    return {
        "status": "success",
        "message": "",
        "http_code": 200,
        "data": {
            "type": "messages",
            "list_item_type": "message",
            "size": 25,
            "items": [{
                "type": "message",
                "id": "602114",
                "href": "/messages/602114",
                "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/RESOLVED-Bank-Feeds-Unable-to-connect-05-08-2019/td-p/602114",
                "author": {
                    "type": "user",
                    "id": "49125",
                    "href": "/users/49125",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/49125",
                    "login": "Steven_M"
                },
                "subject": "RESOLVED: Bank Feeds: Unable to connect - 05/08/2019",
                "search_snippet": "Hi Everyone \n &nbsp; \n Current Status - Resolved \n   Products: Bank Feeds    We are aware that clients are encountering an Unable to Connect/Errors connecting to this site or service Message when att...",
                "body": "<P>Hi Everyone</P>\n<P>&nbsp;</P>\n<P><FONT color=\"#99CC00\"><STRONG>Current Status - Resolved</STRONG></FONT></P>\n<P><BR /><STRONG>Products: Bank Feeds</STRONG><BR /><BR />We are aware that clients are encountering an Unable to Connect/Errors connecting to this site or service Message when attempting to retrieve their latest bank transactions.</P>\n<P><BR />We’re looking into the cause right now and we realise how important it is to resolve it as quickly as possible.</P>\n<P>&nbsp;</P>\n<P>Thank you for your patience and we apologise for the inconvenience.</P>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "Accounting_Software_General",
                    "href": "/boards/Accounting_Software_General",
                    "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/bd-p/Accounting_Software_General"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "602114",
                    "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/RESOLVED-Bank-Feeds-Unable-to-connect-05-08-2019/td-p/602114",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 4,
                    "solved": true,
                    "last_post_time": "2019-08-05T14:42:40.413-07:00",
                    "last_post_time_friendly": "August"
                },
                "topic": {
                    "type": "message",
                    "id": "602114",
                    "href": "/messages/602114",
                    "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/RESOLVED-Bank-Feeds-Unable-to-connect-05-08-2019/m-p/602114#M87632"
                },
                "post_time": "2019-08-04T15:46:28.199-07:00",
                "post_time_friendly": "August",
                "depth": 0,
                "read_only": true,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": false,
                "solution_data": {},
                "metrics": {
                    "type": "message_metrics",
                    "views": 2575
                },
                "current_revision": {
                    "type": "revision",
                    "id": "2",
                    "last_edit_author": {
                        "type": "user",
                        "id": "49125",
                        "href": "/users/49125",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/49125",
                        "login": "Steven_M"
                    },
                    "last_edit_time": "2019-08-05T14:43:38.083-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '602114'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '602114'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '602114'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '602114'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '602114'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '602114'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '602114'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '602114'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '602114'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '602114'"
                },
                "moderation_status": "approved",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "google_chrome_75",
                "popularity": 3.1484480112595474E-4,
                "excluded_from_kudos_leaderboards": false
            }, {
                "type": "message",
                "id": "593098",
                "href": "/messages/593098",
                "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/Not-Tax-Ready-Income-Statement/td-p/593098",
                "author": {
                    "type": "user",
                    "id": "205921",
                    "href": "/users/205921",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/205921",
                    "login": "WUC101"
                },
                "subject": "'Not Tax Ready' Income Statement",
                "search_snippet": "This is what i did in MYOB.&nbsp;&nbsp;  &nbsp;  Payroll Reporting Centre - &gt; EOFY Finalisation -&gt; Tick employees and set as final - &gt; Final indicator has been ticked  &nbsp;  However, when ...",
                "body": "<P>This is what i did in MYOB.&nbsp;&nbsp;</P><P>&nbsp;</P><P>Payroll Reporting Centre - &gt; EOFY Finalisation -&gt; Tick employees and set as final - &gt; Final indicator has been ticked</P><P>&nbsp;</P><P>However, when i logged into my gov. It shows as \"Not Tax Ready\". Why is that?&nbsp; Please kindly provide support.&nbsp;</P><P>&nbsp;</P><P>Thank you</P><P>&nbsp;</P><P>&nbsp;</P>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "STPQnA",
                    "href": "/boards/STPQnA",
                    "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/bd-p/STPQnA"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "593098",
                    "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/Not-Tax-Ready-Income-Statement/td-p/593098",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 19,
                    "solved": true,
                    "last_post_time": "2019-07-20T22:34:31.425-07:00",
                    "last_post_time_friendly": "July"
                },
                "topic": {
                    "type": "message",
                    "id": "593098",
                    "href": "/messages/593098",
                    "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/Not-Tax-Ready-Income-Statement/m-p/593098#M5566"
                },
                "post_time": "2019-07-04T00:50:58.272-07:00",
                "post_time_friendly": "July",
                "depth": 0,
                "read_only": false,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": false,
                "solution_data": {},
                "metrics": {
                    "type": "message_metrics",
                    "views": 2586
                },
                "current_revision": {
                    "type": "revision",
                    "id": "1",
                    "last_edit_author": {
                        "type": "user",
                        "id": "205921",
                        "href": "/users/205921",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/205921",
                        "login": "WUC101"
                    },
                    "last_edit_time": "2019-07-04T00:50:58.272-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '593098'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '593098'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '593098'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '593098'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '593098'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '593098'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '593098'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '593098'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '593098'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '593098'"
                },
                "moderation_status": "unmoderated",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "google_chrome_75",
                "popularity": -3326.087357777778,
                "excluded_from_kudos_leaderboards": false
            }, {
                "type": "message",
                "id": "593107",
                "href": "/messages/593107",
                "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/Not-Tax-Ready-Income-Statement/m-p/593107#M5571",
                "author": {
                    "type": "user",
                    "id": "97805",
                    "href": "/users/97805",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/97805",
                    "login": "bungy15"
                },
                "subject": "Re: 'Not Tax Ready' Income Statement",
                "search_snippet": "Hi&nbsp;@WUC101&nbsp;  &nbsp;  No sorry I don’t. I guess it depends on how busy they are.",
                "body": "<P>Hi&nbsp;<a href=\"https://community.myob.com/t5/user/viewprofilepage/user-id/205921\">@WUC101</a>&nbsp;</P><P>&nbsp;</P><P>No sorry I don’t. I guess it depends on how busy they are.</P>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "STPQnA",
                    "href": "/boards/STPQnA",
                    "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/bd-p/STPQnA"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "593098",
                    "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/Not-Tax-Ready-Income-Statement/td-p/593098",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 19,
                    "solved": true,
                    "last_post_time": "2019-07-20T22:34:31.425-07:00",
                    "last_post_time_friendly": "July"
                },
                "topic": {
                    "type": "message",
                    "id": "593098",
                    "href": "/messages/593098",
                    "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/Not-Tax-Ready-Income-Statement/m-p/593098#M5566"
                },
                "parent": {
                    "type": "message",
                    "id": "593102",
                    "href": "/messages/593102",
                    "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/Not-Tax-Ready-Income-Statement/m-p/593102#M5569"
                },
                "post_time": "2019-07-04T01:11:53.828-07:00",
                "post_time_friendly": "July",
                "depth": 3,
                "read_only": false,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": true,
                "solution_data": {
                    "type": "solution_data",
                    "message_id": "593107",
                    "accepter": {
                        "type": "user",
                        "id": "205921",
                        "href": "/users/205921",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/205921",
                        "login": "WUC101"
                    },
                    "time": "2019-07-04T16:27:32.000-07:00"
                },
                "metrics": {
                    "type": "message_metrics",
                    "views": 2577
                },
                "current_revision": {
                    "type": "revision",
                    "id": "1",
                    "last_edit_author": {
                        "type": "user",
                        "id": "97805",
                        "href": "/users/97805",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/97805",
                        "login": "bungy15"
                    },
                    "last_edit_time": "2019-07-04T01:11:53.828-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '593107'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '593107'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '593107'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '593107'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '593107'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '593107'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '593107'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '593107'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '593107'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '593107'"
                },
                "moderation_status": "unmoderated",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "apple_ipad_ver1_sub11_4",
                "popularity": 5.209261927771016E-6,
                "excluded_from_kudos_leaderboards": false
            }, {
                "type": "message",
                "id": "613734",
                "href": "/messages/613734",
                "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/unable-to-connect-to-bank-feeds-again/td-p/613734",
                "author": {
                    "type": "user",
                    "id": "167632",
                    "href": "/users/167632",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/167632",
                    "login": "FHG"
                },
                "subject": "unable to connect to bank feeds .... again",
                "search_snippet": "I'm receiving the Unable to Connect error, again, when trying to Get Bank Transactions in the Bank Feed menu.  &nbsp;  I have looked at Steven's wonderful post yesterday that said it's due to the ban...",
                "body": "<P>I'm receiving the Unable to Connect error, again, when trying to Get Bank Transactions in the Bank Feed menu.</P><P>&nbsp;</P><P>I have looked at Steven's wonderful post yesterday that said it's due to the banks not providing the information in a timely manner but I would have thought that would mean it would result in a&nbsp; different screen message?</P><P>&nbsp;</P><P>Help please.</P><P>&nbsp;</P><P>I use NAB.</P>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "Accounting_Software_General",
                    "href": "/boards/Accounting_Software_General",
                    "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/bd-p/Accounting_Software_General"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "613734",
                    "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/unable-to-connect-to-bank-feeds-again/td-p/613734",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 42,
                    "solved": true,
                    "last_post_time": "2019-10-15T15:55:03.143-07:00",
                    "last_post_time_friendly": "a month ago"
                },
                "topic": {
                    "type": "message",
                    "id": "613734",
                    "href": "/messages/613734",
                    "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/unable-to-connect-to-bank-feeds-again/m-p/613734#M89229"
                },
                "post_time": "2019-10-09T15:20:51.199-07:00",
                "post_time_friendly": "a month ago",
                "depth": 0,
                "read_only": false,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": false,
                "solution_data": {},
                "metrics": {
                    "type": "message_metrics",
                    "views": 674
                },
                "current_revision": {
                    "type": "revision",
                    "id": "1",
                    "last_edit_author": {
                        "type": "user",
                        "id": "167632",
                        "href": "/users/167632",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/167632",
                        "login": "FHG"
                    },
                    "last_edit_time": "2019-10-09T15:20:51.199-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '613734'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '613734'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '613734'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '613734'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '613734'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '613734'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '613734'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '613734'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '613734'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '613734'"
                },
                "moderation_status": "unmoderated",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "google_chrome_77",
                "popularity": 1.615942927284847E-4,
                "excluded_from_kudos_leaderboards": false
            }, {
                "type": "message",
                "id": "591458",
                "href": "/messages/591458",
                "view_href": "https://community.myob.com/t5/AccountRight-Installing-and/AccountRight-2019-2-1-is-a-dud/td-p/591458",
                "author": {
                    "type": "user",
                    "id": "20133",
                    "href": "/users/20133",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/20133",
                    "login": "Naomi_Roskell"
                },
                "subject": "AccountRight 2019.2.1 is a dud...",
                "search_snippet": "Hi There MYOB \n &nbsp; \n I don't have AccountRight 2019.2 SE in my Programs list now as I Uninstalled it from advice given in Help Notes, but the software is still loading up after I have turned off ...",
                "body": "<P>Hi There MYOB</P>\n<P>&nbsp;</P>\n<P>I don't have AccountRight 2019.2 SE in my Programs list now as I Uninstalled it from advice given in Help Notes, but the software is still loading up after I have turned off then turned on my computer. What's your workaround for this?</P>\n<P>(AccountRight Server 2019.2 is still showing in my Services, see screenshot)</P>\n<P>&nbsp;</P>\n<P>So here's the background...</P>\n<P>&nbsp;</P>\n<P>First up, I came across an error when I attempted to back up my datafile after having finalised my STP for 2019 (high 5 for me), the error said: \"ApplicationServices.Container.API.IAccountContainerService.GetCompositeObjectById\"</P>\n<P>Yep! I know what this means, NOT!</P>\n<P>I scoured MYOB Help Notes and came across one which was titled, \"AccountRight Server Service Issues\", I followed the relevant flowchat which directed me to the numbers which represent the issue I have, as follows: 1, 5, 6.</P>\n<P>This allowed me to complete the backup of my datafile.</P>\n<P>&nbsp;</P>\n<P>Then, I tried to upgrade to 2019.2.1 from inside my own file, but then I noticed that in quite small writing, it said that for SE edition I needed to click in that location and download it from elesewhere, it re-directed me to a Help Note title \"Updating an AccountRight Network\" this is the link for the update... &lt;&lt;Link removed&gt;&gt;</P>\n<P>I tried Opening the file, error! I tried saving the file, but how does it connect to the MYOB Software?</P>\n<P>&nbsp;</P>\n<P>I then had a look at the pinned note just above the \"to update AccountRight on a Network\" instruction and tried clicking on the link to update the server edition, it downloaded to my computer but when I try to install it, I get an error;</P>\n<P>\"Another version of this product is already installed. Installation of this version cannot continue. To configure or remove the existing version of this product, use Add/Remove Programs on the Control Panel.</P>\n<P>{CF8798BB-4ACE-4BF0-9EA6-171C00C4382}\"</P>\n<P>&nbsp;</P>\n<P>Why is MYOB so unnecesarily complex at a User level?</P>\n<P>&nbsp;</P>\n<P>I am running Windows 7 Professional Service Pack 1 with a 64Bit Operating System that has 8GB RAM</P>\n<P>&nbsp;</P>\n<P>Naomi</P>\n<P>&nbsp;</P>\n<P>UPDATE: 9:03AM 02/07/19</P>\n<P>Jut tried this...</P>\n<P><A href=\"https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/Where-are-the-new-tax-tables/td-p/588856\" target=\"_blank\" rel=\"noopener\">https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/Where-are-the-new-tax-tables/td-p/588856</A></P>\n<P>I received an error message when I attempted to install a new download of the Server Edition, C:\\Users\\Admin\\Desktop\\MYOB_AccountRight_Server.exe is not a valid Win32 application.</P>\n<P>&nbsp;</P>\n<P>Any takers yet?</P>\n<P>&nbsp;</P>\n<P>UPDATE: 9:05AM 02/07/19</P>\n<P>The file icon changed to an Install icon, tried clicking on it again. I'm back to square one with the \"Another version of this product is already installed blah blah blah...\" The same error code as previously mentioned at this stage above and once again I re-iterate, I Uninstalled 2019.2 yesterday, but now I've also deleted the local 2019.2 file from localappdata, as advised on another Help Note...</P>\n<P>&nbsp;</P>\n<P>Really like some assistance to get this resolved, I presently have NO ACCESS to my own datafile and CANNOT PROCESS PAYS DUE YESTERDAY!!!</P>\n<P>&nbsp;</P>\n<P>UPDATE: 10:01pm 02/07/19</P>\n<P>No replies, workarounds or advice when this was posted 24 hours ago. 5 hours researching last night, another two this morning then 3 hours off and on with Support today. I called for another issue, but lo and behold that other issue merged into this one. Has anyone else updated an AccountRight Plus 2019.2.0 from within their MYOB Software and had SE version installed? Oh, it gets better, not only is it 2019.2.1, the tax compliance update, but when you've rolled over your Payroll Year and attempt to update the tax tables, the option is for tax year starting 01/07/2018, WAHOO!!! RIPPER RITA!!! HAPPY DAYS!!!! Just what I needed.... Needless to say that I had MYOB on the other end of the phone when this occured (no Murphys Law, thank goodness!), so \"Old Mate\" Teamviewered in to do all the troubleshooting I had already done and ends the conversation with, \"Tech will get back to you\". don't get me wrong, the guy was lovely and tried his best, but far out!!! Why does MYOB keep trying to re-invent the wheel??? They need to hire some guys from \"Old Blue\" to give them a hand. I've been loyal to MYOB for near 20 years, it's just not right, you can't blame your workload or the new obligations or this or that, you've been around for over 25 years, way longer than some of your competition. Another good one I've heard is, \"But they don't have the depth of our product..\" (Yes, well they don't have the problems either...). I can't take the annual stress anymore, not when there are other options that don't include the time spent updating every computer, bug fixes and can then have your EOPY done in three clicks (once setup)... I mean seriously, I start having anxiety attacks in the middle of May. Near tossed my PC out the window a few times and can't count the number of tears shed out of frustration and anger and the heartfelt agony for want of being loyal...</P>\n<P>&nbsp;</P>\n<P>PS. My staff were paid, but I still can't process it in MYOB...</P>\n<P>&nbsp;</P>\n<P>This is Naomi...</P>\n<P><img id=\"womansad\" class=\"emoticon emoticon-womansad\" src=\"https://myob.i.lithium.com/i/smilies/16x16_woman-sad.gif\" alt=\"Woman Sad\" title=\"Woman Sad\" /></P>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "InstallingUpgrading",
                    "href": "/boards/InstallingUpgrading",
                    "view_href": "https://community.myob.com/t5/AccountRight-Installing-and/bd-p/InstallingUpgrading"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "591458",
                    "view_href": "https://community.myob.com/t5/AccountRight-Installing-and/AccountRight-2019-2-1-is-a-dud/td-p/591458",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 19,
                    "solved": true,
                    "last_post_time": "2019-08-01T16:53:25.696-07:00",
                    "last_post_time_friendly": "August"
                },
                "topic": {
                    "type": "message",
                    "id": "591458",
                    "href": "/messages/591458",
                    "view_href": "https://community.myob.com/t5/AccountRight-Installing-and/AccountRight-2019-2-1-is-a-dud/m-p/591458#M39137"
                },
                "post_time": "2019-07-02T05:20:57.530-07:00",
                "post_time_friendly": "July",
                "depth": 0,
                "read_only": false,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": false,
                "solution_data": {},
                "metrics": {
                    "type": "message_metrics",
                    "views": 2328
                },
                "current_revision": {
                    "type": "revision",
                    "id": "4",
                    "last_edit_author": {
                        "type": "user",
                        "id": "49125",
                        "href": "/users/49125",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/49125",
                        "login": "Steven_M"
                    },
                    "last_edit_time": "2019-07-02T13:53:16.480-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '591458'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '591458'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '591458'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '591458'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '591458'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '591458'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '591458'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '591458'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '591458'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '591458'"
                },
                "moderation_status": "unmoderated",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "google_chrome_75",
                "popularity": 1.0215939916031926E-5,
                "excluded_from_kudos_leaderboards": false
            }, {
                "type": "message",
                "id": "591505",
                "href": "/messages/591505",
                "view_href": "https://community.myob.com/t5/AccountRight-Installing-and/AccountRight-2019-2-1-is-a-dud/m-p/591505#M39148",
                "author": {
                    "type": "user",
                    "id": "49125",
                    "href": "/users/49125",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/49125",
                    "login": "Steven_M"
                },
                "subject": "Re: AccountRight 2019.2.1 is a dud...",
                "search_snippet": "Hi&nbsp;@Naomi_Roskell&nbsp; \n &nbsp; \n Great to see that&nbsp;@GDay53&nbsp; has offered his assistance in regards to your enquiry \n &nbsp; \n I've seen some clients encounter similar situations when ...",
                "body": "<P>Hi&nbsp;<a href=\"https://community.myob.com/t5/user/viewprofilepage/user-id/20133\">@Naomi_Roskell</a>&nbsp;</P>\n<P>&nbsp;</P>\n<P>Great to see that&nbsp;<a href=\"https://community.myob.com/t5/user/viewprofilepage/user-id/9996\">@GDay53</a>&nbsp; has offered his assistance in regards to your enquiry</P>\n<P>&nbsp;</P>\n<P>I've seen some clients encounter similar situations when they attempt to reinstall within the same Windows session as Windows is still believing that the software is still installed. Restarting the computer would be the recommendation to resolve that one.<BR /><BR />If you are still encountering that situation, the <A href=\"https://support.microsoft.com/en-us/help/17588/windows-fix-problems-that-block-programs-being-installed-or-removed\" target=\"_self\" rel=\"nofollow noopener noreferrer\">following Microsoft tool</A> has had worked to clear that program and correct possible corrupt registry keys so that the new version can installed.</P>\n<P><BR />Do let us know how you get on and if you require further assistance</P>\n<P>&nbsp;</P>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "InstallingUpgrading",
                    "href": "/boards/InstallingUpgrading",
                    "view_href": "https://community.myob.com/t5/AccountRight-Installing-and/bd-p/InstallingUpgrading"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "591458",
                    "view_href": "https://community.myob.com/t5/AccountRight-Installing-and/AccountRight-2019-2-1-is-a-dud/td-p/591458",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 19,
                    "solved": true,
                    "last_post_time": "2019-08-01T16:53:25.696-07:00",
                    "last_post_time_friendly": "August"
                },
                "topic": {
                    "type": "message",
                    "id": "591458",
                    "href": "/messages/591458",
                    "view_href": "https://community.myob.com/t5/AccountRight-Installing-and/AccountRight-2019-2-1-is-a-dud/m-p/591458#M39137"
                },
                "parent": {
                    "type": "message",
                    "id": "591493",
                    "href": "/messages/591493",
                    "view_href": "https://community.myob.com/t5/AccountRight-Installing-and/AccountRight-2019-2-1-is-a-dud/m-p/591493#M39147"
                },
                "post_time": "2019-07-02T14:04:34.746-07:00",
                "post_time_friendly": "July",
                "depth": 2,
                "read_only": false,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": true,
                "solution_data": {
                    "type": "solution_data",
                    "message_id": "591505",
                    "accepter": {
                        "type": "user",
                        "id": "20133",
                        "href": "/users/20133",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/20133",
                        "login": "Naomi_Roskell"
                    },
                    "time": "2019-07-03T08:23:48.000-07:00"
                },
                "metrics": {
                    "type": "message_metrics",
                    "views": 2246
                },
                "current_revision": {
                    "type": "revision",
                    "id": "1",
                    "last_edit_author": {
                        "type": "user",
                        "id": "49125",
                        "href": "/users/49125",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/49125",
                        "login": "Steven_M"
                    },
                    "last_edit_time": "2019-07-02T14:04:34.746-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '591505'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '591505'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '591505'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '591505'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '591505'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '591505'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '591505'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '591505'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '591505'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '591505'"
                },
                "moderation_status": "approved",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "google_chrome_75",
                "popularity": 5.127866491754007E-6,
                "excluded_from_kudos_leaderboards": false
            }, {
                "type": "message",
                "id": "613755",
                "href": "/messages/613755",
                "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/unable-to-connect-to-bank-feeds-again/m-p/613755#M89244",
                "author": {
                    "type": "user",
                    "id": "200895",
                    "href": "/users/200895",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/200895",
                    "login": "Theresa_D"
                },
                "subject": "Re: unable to connect to bank feeds .... again",
                "search_snippet": "Hi Everyone,&nbsp; \n &nbsp; \n Thank you for bringing the bank feeds issue to our attention.&nbsp; The issue has now been resolved and you should be able to access your bank feeds.&nbsp;&nbsp; \n &amp;nbsp...",
                "body": "<P>Hi Everyone,&nbsp;</P>\n<P>&nbsp;</P>\n<P>Thank you for bringing the bank feeds issue to our attention.&nbsp; The issue has now been resolved and you should be able to access your bank feeds.&nbsp;&nbsp;</P>\n<P>&nbsp;</P>\n<P>Let us know if you still have any issues with this.&nbsp;</P>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "Accounting_Software_General",
                    "href": "/boards/Accounting_Software_General",
                    "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/bd-p/Accounting_Software_General"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "613734",
                    "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/unable-to-connect-to-bank-feeds-again/td-p/613734",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 42,
                    "solved": true,
                    "last_post_time": "2019-10-15T15:55:03.143-07:00",
                    "last_post_time_friendly": "a month ago"
                },
                "topic": {
                    "type": "message",
                    "id": "613734",
                    "href": "/messages/613734",
                    "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/unable-to-connect-to-bank-feeds-again/m-p/613734#M89229"
                },
                "parent": {
                    "type": "message",
                    "id": "613734",
                    "href": "/messages/613734",
                    "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/unable-to-connect-to-bank-feeds-again/m-p/613734#M89229"
                },
                "post_time": "2019-10-09T16:06:34.711-07:00",
                "post_time_friendly": "a month ago",
                "depth": 1,
                "read_only": false,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": true,
                "solution_data": {
                    "type": "solution_data",
                    "message_id": "613755",
                    "accepter": {
                        "type": "user",
                        "id": "167632",
                        "href": "/users/167632",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/167632",
                        "login": "FHG"
                    },
                    "time": "2019-10-09T16:33:02.000-07:00"
                },
                "metrics": {
                    "type": "message_metrics",
                    "views": 597
                },
                "current_revision": {
                    "type": "revision",
                    "id": "2",
                    "last_edit_author": {
                        "type": "user",
                        "id": "200895",
                        "href": "/users/200895",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/200895",
                        "login": "Theresa_D"
                    },
                    "last_edit_time": "2019-10-09T16:08:30.402-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '613755'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '613755'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '613755'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '613755'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '613755'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '613755'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '613755'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '613755'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '613755'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '613755'"
                },
                "moderation_status": "approved",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "google_chrome_77",
                "popularity": -982.8272416666666,
                "excluded_from_kudos_leaderboards": false
            }, {
                "type": "message",
                "id": "615855",
                "href": "/messages/615855",
                "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/Bank-feeds-NAB-not-updating-21-10/td-p/615855",
                "author": {
                    "type": "user",
                    "id": "212075",
                    "href": "/users/212075",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/212075",
                    "login": "debrarBNE"
                },
                "subject": "Bank feeds NAB not updating 21/10",
                "search_snippet": "Hi, I have tried to update the bank feeds from NAB but noticed transactions from 18/10/2019 are not updating?  thanks to advise if there are any issues&nbsp;  Kind regards  Debra",
                "body": "<P>Hi, I have tried to update the bank feeds from NAB but noticed transactions from 18/10/2019 are not updating?</P><P>thanks to advise if there are any issues&nbsp;</P><P>Kind regards</P><P>Debra</P>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "Accounting_Software_General",
                    "href": "/boards/Accounting_Software_General",
                    "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/bd-p/Accounting_Software_General"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "615855",
                    "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/Bank-feeds-NAB-not-updating-21-10/td-p/615855",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 35,
                    "solved": true,
                    "last_post_time": "2019-10-22T19:40:53.412-07:00",
                    "last_post_time_friendly": "a month ago"
                },
                "topic": {
                    "type": "message",
                    "id": "615855",
                    "href": "/messages/615855",
                    "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/Bank-feeds-NAB-not-updating-21-10/m-p/615855#M89768"
                },
                "post_time": "2019-10-20T17:07:53.728-07:00",
                "post_time_friendly": "a month ago",
                "depth": 0,
                "read_only": false,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": false,
                "solution_data": {},
                "metrics": {
                    "type": "message_metrics",
                    "views": 516
                },
                "current_revision": {
                    "type": "revision",
                    "id": "1",
                    "last_edit_author": {
                        "type": "user",
                        "id": "212075",
                        "href": "/users/212075",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/212075",
                        "login": "debrarBNE"
                    },
                    "last_edit_time": "2019-10-20T17:07:53.728-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '615855'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '615855'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '615855'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '615855'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '615855'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '615855'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '615855'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '615855'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '615855'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '615855'"
                },
                "moderation_status": "unmoderated",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "google_chrome_77",
                "popularity": 2.071273443554756E-4,
                "excluded_from_kudos_leaderboards": false
            }, {
                "type": "message",
                "id": "595139",
                "href": "/messages/595139",
                "view_href": "https://community.myob.com/t5/Accountants-Enterprise/2019-Individual-Income-Tax-return-lodgement-error-CMN-ATO-IITR/td-p/595139",
                "author": {
                    "type": "user",
                    "id": "206708",
                    "href": "/users/206708",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/206708",
                    "login": "AaronWood"
                },
                "subject": "2019 Individual Income Tax return lodgement error CMN.ATO.IITR.730001",
                "search_snippet": "Hi,    We recently attempted to lodge a 2019 Individual Income Tax return with a Work Related Car expense claim.    The software requires us to make a log book claim using schedule MVE 'Motor Vehicle...",
                "body": "<P>Hi,<BR /><BR />We recently attempted to lodge a 2019 Individual Income Tax return with a Work Related Car expense claim.<BR /><BR />The software requires us to make a log book claim using schedule MVE 'Motor Vehicle Expneses Worksheet', which then automatically integrates to the new schedule DS 'Deductions scheduel (DDCTNS)', which in turn automatically integrates to D1 in the tax return. As such the figues should in theory all be the same.<BR /><BR />The return is then successfully 'completed' within MYOB AE Tax.<BR /><BR />The ATO however is rejecting the lodgement of the return and is providing the error code / message as:<BR />Code: CMN.ATO.IITR.730001<BR />Summary: Work related car expenses amount is incorrect<BR />Details: The work related car expenses must equal the sum of all car expense amounts claimed in the attached Deductions schedule.<BR /><BR />As we have no control over, or ability to manually alter, the amounts integrating into schedule DS and D1 as they come from the schedule MVE how do we fix the return so it will lodge?<BR /><BR />Regards<BR />Aaron</P>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "AETax",
                    "href": "/boards/AETax",
                    "view_href": "https://community.myob.com/t5/Accountants-Enterprise/bd-p/AETax"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "595139",
                    "view_href": "https://community.myob.com/t5/Accountants-Enterprise/2019-Individual-Income-Tax-return-lodgement-error-CMN-ATO-IITR/td-p/595139",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 14,
                    "solved": true,
                    "last_post_time": "2019-07-25T01:04:12.967-07:00",
                    "last_post_time_friendly": "July"
                },
                "topic": {
                    "type": "message",
                    "id": "595139",
                    "href": "/messages/595139",
                    "view_href": "https://community.myob.com/t5/Accountants-Enterprise/2019-Individual-Income-Tax-return-lodgement-error-CMN-ATO-IITR/m-p/595139#M2255"
                },
                "post_time": "2019-07-09T17:29:59.800-07:00",
                "post_time_friendly": "July",
                "depth": 0,
                "read_only": false,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": false,
                "solution_data": {},
                "metrics": {
                    "type": "message_metrics",
                    "views": 1726
                },
                "current_revision": {
                    "type": "revision",
                    "id": "1",
                    "last_edit_author": {
                        "type": "user",
                        "id": "206708",
                        "href": "/users/206708",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/206708",
                        "login": "AaronWood"
                    },
                    "last_edit_time": "2019-07-09T17:29:59.800-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '595139'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '595139'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '595139'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '595139'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '595139'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '595139'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '595139'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '595139'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '595139'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '595139'"
                },
                "moderation_status": "unmoderated",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "msie_11",
                "popularity": -3189.436941388889,
                "excluded_from_kudos_leaderboards": false
            }, {
                "type": "message",
                "id": "595781",
                "href": "/messages/595781",
                "view_href": "https://community.myob.com/t5/Accountants-Enterprise/2019-Individual-Income-Tax-return-lodgement-error-CMN-ATO-IITR/m-p/595781#M2266",
                "author": {
                    "type": "user",
                    "id": "102643",
                    "href": "/users/102643",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/102643",
                    "login": "MattN"
                },
                "subject": "Re: 2019 Individual Income Tax return lodgement error CMN.ATO.IITR.730001",
                "search_snippet": "Hi&nbsp;@AaronWood, \n &nbsp; \n for clients who had downloaded prior to and including the 3rd, there was an rounding issue with Cents per km calcuations on the D1 field - and was corrected with a hotf...",
                "body": "<P>Hi&nbsp;<a href=\"https://community.myob.com/t5/user/viewprofilepage/user-id/206708\">@AaronWood</a>,</P>\n<P>&nbsp;</P>\n<P>for clients who had downloaded prior to and including the 3rd, there was an rounding issue with Cents per km calcuations on the D1 field - and was corrected with a hotfix (it's the reason why we had to delay the release (we had intended to get it out on the Tuesday of that week) - some clients had downloaded early.</P>\n<P>&nbsp;</P>\n<P>looking at the list of things our development team have identified and worked in since the 2019.0 release, it looks like it has been addressed for Logbook rounding as well - and should be in the 2019.0a release which is due out in the next few weeks.</P>\n<P>&nbsp;</P>\n<P>&nbsp;</P>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "AETax",
                    "href": "/boards/AETax",
                    "view_href": "https://community.myob.com/t5/Accountants-Enterprise/bd-p/AETax"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "595139",
                    "view_href": "https://community.myob.com/t5/Accountants-Enterprise/2019-Individual-Income-Tax-return-lodgement-error-CMN-ATO-IITR/td-p/595139",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 14,
                    "solved": true,
                    "last_post_time": "2019-07-25T01:04:12.967-07:00",
                    "last_post_time_friendly": "July"
                },
                "topic": {
                    "type": "message",
                    "id": "595139",
                    "href": "/messages/595139",
                    "view_href": "https://community.myob.com/t5/Accountants-Enterprise/2019-Individual-Income-Tax-return-lodgement-error-CMN-ATO-IITR/m-p/595139#M2255"
                },
                "parent": {
                    "type": "message",
                    "id": "595754",
                    "href": "/messages/595754",
                    "view_href": "https://community.myob.com/t5/Accountants-Enterprise/2019-Individual-Income-Tax-return-lodgement-error-CMN-ATO-IITR/m-p/595754#M2264"
                },
                "post_time": "2019-07-10T18:21:24.633-07:00",
                "post_time_friendly": "July",
                "depth": 5,
                "read_only": false,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": true,
                "solution_data": {
                    "type": "solution_data",
                    "message_id": "595781",
                    "accepter": {
                        "type": "user",
                        "id": "206708",
                        "href": "/users/206708",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/206708",
                        "login": "AaronWood"
                    },
                    "time": "2019-07-10T18:26:40.000-07:00"
                },
                "metrics": {
                    "type": "message_metrics",
                    "views": 1661
                },
                "current_revision": {
                    "type": "revision",
                    "id": "1",
                    "last_edit_author": {
                        "type": "user",
                        "id": "102643",
                        "href": "/users/102643",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/102643",
                        "login": "MattN"
                    },
                    "last_edit_time": "2019-07-10T18:21:24.633-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '595781'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '595781'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '595781'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '595781'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '595781'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '595781'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '595781'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '595781'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '595781'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '595781'"
                },
                "moderation_status": "approved",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "google_chrome_75",
                "popularity": 5.611956476209785E-6,
                "excluded_from_kudos_leaderboards": false
            }, {
                "type": "message",
                "id": "609056",
                "href": "/messages/609056",
                "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/Unable-to-Connect-ARL/td-p/609056",
                "author": {
                    "type": "user",
                    "id": "191923",
                    "href": "/users/191923",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/191923",
                    "login": "Yves"
                },
                "subject": "Unable to Connect ARL",
                "search_snippet": "Am I the only one currently experiencing Unable to Connect when opening an online file? Please help!      Kind regards,&nbsp;    Yves",
                "body": "<P>Am I the only one currently experiencing Unable to Connect when opening an online file? Please help!<BR /><BR /><BR />Kind regards,&nbsp;<BR /><BR />Yves</P>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "Accounting_Software_General",
                    "href": "/boards/Accounting_Software_General",
                    "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/bd-p/Accounting_Software_General"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "609056",
                    "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/Unable-to-Connect-ARL/td-p/609056",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 10,
                    "solved": true,
                    "last_post_time": "2019-09-10T20:21:03.191-07:00",
                    "last_post_time_friendly": "September"
                },
                "topic": {
                    "type": "message",
                    "id": "609056",
                    "href": "/messages/609056",
                    "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/Unable-to-Connect-ARL/m-p/609056#M88576"
                },
                "post_time": "2019-09-10T17:52:05.839-07:00",
                "post_time_friendly": "September",
                "depth": 0,
                "read_only": false,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": false,
                "solution_data": {},
                "metrics": {
                    "type": "message_metrics",
                    "views": 824
                },
                "current_revision": {
                    "type": "revision",
                    "id": "1",
                    "last_edit_author": {
                        "type": "user",
                        "id": "191923",
                        "href": "/users/191923",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/191923",
                        "login": "Yves"
                    },
                    "last_edit_time": "2019-09-10T17:52:05.839-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '609056'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '609056'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '609056'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '609056'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '609056'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '609056'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '609056'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '609056'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '609056'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '609056'"
                },
                "moderation_status": "unmoderated",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "google_chrome_76",
                "popularity": 2.9068815526439477E-5,
                "excluded_from_kudos_leaderboards": false
            }, {
                "type": "message",
                "id": "588432",
                "href": "/messages/588432",
                "view_href": "https://community.myob.com/t5/MYOB-Essentials-Accounting/Single-Touch-Payroll-STP/td-p/588432",
                "author": {
                    "type": "user",
                    "id": "204097",
                    "href": "/users/204097",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/204097",
                    "login": "Selo"
                },
                "subject": "Single Touch Payroll (STP)",
                "search_snippet": "Hi,  &nbsp;  I have just registered a business for STP but our first payrun was done prior to this registration. I have read that on our next pay run the YTD figures will be updated though my problem...",
                "body": "<P>Hi,</P><P>&nbsp;</P><P>I have just registered a business for STP but our first payrun was done prior to this registration. I have read that on our next pay run the YTD figures will be updated though my problem is that our next pay run will be after July 1st.</P><P>&nbsp;</P><P>How does one update the previous pay run before EOFY? Is it a case of doing a dummy pay run with nil figures?</P><P>&nbsp;</P><P>Thanks in advance.</P>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "EssentialsAccounting",
                    "href": "/boards/EssentialsAccounting",
                    "view_href": "https://community.myob.com/t5/MYOB-Essentials-Accounting/bd-p/EssentialsAccounting"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "588432",
                    "view_href": "https://community.myob.com/t5/MYOB-Essentials-Accounting/Single-Touch-Payroll-STP/td-p/588432",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 9,
                    "solved": true,
                    "last_post_time": "2019-07-17T21:26:08.710-07:00",
                    "last_post_time_friendly": "July"
                },
                "topic": {
                    "type": "message",
                    "id": "588432",
                    "href": "/messages/588432",
                    "view_href": "https://community.myob.com/t5/MYOB-Essentials-Accounting/Single-Touch-Payroll-STP/m-p/588432#M38728"
                },
                "post_time": "2019-06-27T02:33:19.729-07:00",
                "post_time_friendly": "June",
                "depth": 0,
                "read_only": false,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": false,
                "solution_data": {},
                "metrics": {
                    "type": "message_metrics",
                    "views": 1764
                },
                "current_revision": {
                    "type": "revision",
                    "id": "2",
                    "last_edit_author": {
                        "type": "user",
                        "id": "204097",
                        "href": "/users/204097",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/204097",
                        "login": "Selo"
                    },
                    "last_edit_time": "2019-06-27T02:55:55.779-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '588432'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '588432'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '588432'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '588432'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '588432'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '588432'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '588432'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '588432'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '588432'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '588432'"
                },
                "moderation_status": "unmoderated",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "google_chrome_72",
                "popularity": -3492.381408611111,
                "excluded_from_kudos_leaderboards": false
            }, {
                "type": "message",
                "id": "588433",
                "href": "/messages/588433",
                "view_href": "https://community.myob.com/t5/MYOB-Essentials-Accounting/Single-Touch-Payroll-STP/m-p/588433#M38729",
                "author": {
                    "type": "user",
                    "id": "97805",
                    "href": "/users/97805",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/97805",
                    "login": "bungy15"
                },
                "subject": "Re: Single Touch Payroll (STP)",
                "search_snippet": "Hi&nbsp;@Selo&nbsp;  &nbsp;  Yes you can do $0 pays to update the YTD amounts with the ATO and then do STP EOFY Finalisation.  Or you could provide payment summaries and lodge an empdupe for this FY ...",
                "body": "<P>Hi&nbsp;<a href=\"https://community.myob.com/t5/user/viewprofilepage/user-id/204097\">@Selo</a>&nbsp;</P><P>&nbsp;</P><P>Yes you can do $0 pays to update the YTD amounts with the ATO and then do STP EOFY Finalisation.</P><P>Or you could provide payment summaries and lodge an empdupe for this FY and start STP in July.</P><P>&nbsp;</P><P>Cheers</P><P>Tracey</P>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "EssentialsAccounting",
                    "href": "/boards/EssentialsAccounting",
                    "view_href": "https://community.myob.com/t5/MYOB-Essentials-Accounting/bd-p/EssentialsAccounting"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "588432",
                    "view_href": "https://community.myob.com/t5/MYOB-Essentials-Accounting/Single-Touch-Payroll-STP/td-p/588432",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 9,
                    "solved": true,
                    "last_post_time": "2019-07-17T21:26:08.710-07:00",
                    "last_post_time_friendly": "July"
                },
                "topic": {
                    "type": "message",
                    "id": "588432",
                    "href": "/messages/588432",
                    "view_href": "https://community.myob.com/t5/MYOB-Essentials-Accounting/Single-Touch-Payroll-STP/m-p/588432#M38728"
                },
                "parent": {
                    "type": "message",
                    "id": "588432",
                    "href": "/messages/588432",
                    "view_href": "https://community.myob.com/t5/MYOB-Essentials-Accounting/Single-Touch-Payroll-STP/m-p/588432#M38728"
                },
                "post_time": "2019-06-27T02:41:10.027-07:00",
                "post_time_friendly": "June",
                "depth": 1,
                "read_only": false,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": true,
                "solution_data": {
                    "type": "solution_data",
                    "message_id": "588433",
                    "accepter": {
                        "type": "user",
                        "id": "204097",
                        "href": "/users/204097",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/204097",
                        "login": "Selo"
                    },
                    "time": "2019-06-27T02:56:04.000-07:00"
                },
                "metrics": {
                    "type": "message_metrics",
                    "views": 1761
                },
                "current_revision": {
                    "type": "revision",
                    "id": "1",
                    "last_edit_author": {
                        "type": "user",
                        "id": "97805",
                        "href": "/users/97805",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/97805",
                        "login": "bungy15"
                    },
                    "last_edit_time": "2019-06-27T02:41:10.027-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '588433'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '588433'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '588433'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '588433'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '588433'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '588433'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '588433'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '588433'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '588433'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '588433'"
                },
                "moderation_status": "unmoderated",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "apple_ipad_ver1_sub11_4",
                "popularity": 9.682753839076392E-6,
                "excluded_from_kudos_leaderboards": false
            }, {
                "type": "message",
                "id": "607207",
                "href": "/messages/607207",
                "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/Confirm-Company-File/td-p/607207",
                "author": {
                    "type": "user",
                    "id": "206380",
                    "href": "/users/206380",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/206380",
                    "login": "rach2"
                },
                "subject": "Confirm Company File",
                "search_snippet": "Hi, \n &nbsp; \n I'm trying to Confirm my company file online, without any success. I have also tried over the phone they must be flat out today been on hold for ages. \n Any suggestions please? \n &amp;nbsp...",
                "body": "<P>Hi,</P>\n<P>&nbsp;</P>\n<P>I'm trying to Confirm my company file online, without any success. I have also tried over the phone they must be flat out today been on hold for ages.</P>\n<P>Any suggestions please?</P>\n<P>&nbsp;</P>\n<P>Thanks Rachel</P>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "Accounting_Software_General",
                    "href": "/boards/Accounting_Software_General",
                    "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/bd-p/Accounting_Software_General"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "607207",
                    "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/Confirm-Company-File/td-p/607207",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 17,
                    "solved": true,
                    "last_post_time": "2019-09-02T13:33:26.346-07:00",
                    "last_post_time_friendly": "September"
                },
                "topic": {
                    "type": "message",
                    "id": "607207",
                    "href": "/messages/607207",
                    "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/Confirm-Company-File/m-p/607207#M88272"
                },
                "post_time": "2019-09-01T15:34:37.435-07:00",
                "post_time_friendly": "September",
                "depth": 0,
                "read_only": false,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": false,
                "solution_data": {},
                "metrics": {
                    "type": "message_metrics",
                    "views": 786
                },
                "current_revision": {
                    "type": "revision",
                    "id": "2",
                    "last_edit_author": {
                        "type": "user",
                        "id": "49125",
                        "href": "/users/49125",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/49125",
                        "login": "Steven_M"
                    },
                    "last_edit_time": "2019-09-01T15:45:15.824-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '607207'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '607207'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '607207'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '607207'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '607207'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '607207'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '607207'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '607207'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '607207'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '607207'"
                },
                "moderation_status": "unmoderated",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "msie_11",
                "popularity": 3.629917074206856E-5,
                "excluded_from_kudos_leaderboards": false
            }, {
                "type": "message",
                "id": "586266",
                "href": "/messages/586266",
                "view_href": "https://community.myob.com/t5/AccountRight-Staffing-and/new-tax-tables/td-p/586266",
                "author": {
                    "type": "user",
                    "id": "42809",
                    "href": "/users/42809",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/42809",
                    "login": "TomD"
                },
                "subject": "new tax tables",
                "search_snippet": "I watched the EOFY video regarding rolling over the payroll year and will need to finalise all of this this week. Our first payrun is Monday, 1 July.&nbsp; I understand that after closing of the payr...",
                "body": "<P>I watched the EOFY video regarding rolling over the payroll year and will need to finalise all of this this week. Our first payrun is Monday, 1 July.&nbsp; I understand that after closing of the payroll year, I need to roll over and install the compliance update and install the new tax tables.</P><P>When will this be available?&nbsp; I also wonder if there will be new tax tables as it seems that the normal tax tables and rates are actually unchanged ?</P>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "Staffing_and_Payroll",
                    "href": "/boards/Staffing_and_Payroll",
                    "view_href": "https://community.myob.com/t5/AccountRight-Staffing-and/bd-p/Staffing_and_Payroll"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "586266",
                    "view_href": "https://community.myob.com/t5/AccountRight-Staffing-and/new-tax-tables/td-p/586266",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 7,
                    "solved": true,
                    "last_post_time": "2019-07-02T20:16:59.095-07:00",
                    "last_post_time_friendly": "July"
                },
                "topic": {
                    "type": "message",
                    "id": "586266",
                    "href": "/messages/586266",
                    "view_href": "https://community.myob.com/t5/AccountRight-Staffing-and/new-tax-tables/m-p/586266#M43681"
                },
                "post_time": "2019-06-22T20:18:55.189-07:00",
                "post_time_friendly": "June",
                "depth": 0,
                "read_only": false,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": false,
                "solution_data": {},
                "metrics": {
                    "type": "message_metrics",
                    "views": 1664
                },
                "current_revision": {
                    "type": "revision",
                    "id": "1",
                    "last_edit_author": {
                        "type": "user",
                        "id": "42809",
                        "href": "/users/42809",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/42809",
                        "login": "TomD"
                    },
                    "last_edit_time": "2019-06-22T20:18:55.189-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '586266'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '586266'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '586266'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '586266'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '586266'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '586266'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '586266'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '586266'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '586266'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '586266'"
                },
                "moderation_status": "unmoderated",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "firefox_67_0",
                "popularity": 4.636154331673252E-6,
                "excluded_from_kudos_leaderboards": false
            }, {
                "type": "message",
                "id": "586282",
                "href": "/messages/586282",
                "view_href": "https://community.myob.com/t5/AccountRight-Staffing-and/new-tax-tables/m-p/586282#M43687",
                "author": {
                    "type": "user",
                    "id": "97805",
                    "href": "/users/97805",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/97805",
                    "login": "bungy15"
                },
                "subject": "Re: new tax tables",
                "search_snippet": "Hi&nbsp;@TomD&nbsp;and&nbsp;@GDay53&nbsp;  &nbsp;  This is from the ATO website&nbsp;  &nbsp;        &nbsp;  Cheers  Tracey",
                "body": "<P>Hi&nbsp;<a href=\"https://community.myob.com/t5/user/viewprofilepage/user-id/42809\">@TomD</a>&nbsp;and&nbsp;<a href=\"https://community.myob.com/t5/user/viewprofilepage/user-id/9996\">@GDay53</a>&nbsp;</P><P>&nbsp;</P><P>This is from the ATO website&nbsp;</P><P>&nbsp;</P><P><span class=\"lia-inline-image-display-wrapper lia-image-align-inline\" style=\"width: 999px;\"><img src=\"https://myob.i.lithium.com/t5/image/serverpage/image-id/22010iBFD982D803267F04/image-size/large?v=1.0&amp;px=999\" alt=\"8D797241-FF8C-4DA3-BFF0-9DEF233D5166.jpeg\" title=\"8D797241-FF8C-4DA3-BFF0-9DEF233D5166.jpeg\" /></span></P><P>&nbsp;</P><P>Cheers</P><P>Tracey</P>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "Staffing_and_Payroll",
                    "href": "/boards/Staffing_and_Payroll",
                    "view_href": "https://community.myob.com/t5/AccountRight-Staffing-and/bd-p/Staffing_and_Payroll"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "586266",
                    "view_href": "https://community.myob.com/t5/AccountRight-Staffing-and/new-tax-tables/td-p/586266",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 7,
                    "solved": true,
                    "last_post_time": "2019-07-02T20:16:59.095-07:00",
                    "last_post_time_friendly": "July"
                },
                "topic": {
                    "type": "message",
                    "id": "586266",
                    "href": "/messages/586266",
                    "view_href": "https://community.myob.com/t5/AccountRight-Staffing-and/new-tax-tables/m-p/586266#M43681"
                },
                "parent": {
                    "type": "message",
                    "id": "586277",
                    "href": "/messages/586277",
                    "view_href": "https://community.myob.com/t5/AccountRight-Staffing-and/new-tax-tables/m-p/586277#M43686"
                },
                "post_time": "2019-06-22T22:47:43.769-07:00",
                "post_time_friendly": "June",
                "depth": 3,
                "read_only": false,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": true,
                "solution_data": {
                    "type": "solution_data",
                    "message_id": "586282",
                    "accepter": {
                        "type": "user",
                        "id": "42809",
                        "href": "/users/42809",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/42809",
                        "login": "TomD"
                    },
                    "time": "2019-06-22T23:02:37.000-07:00"
                },
                "metrics": {
                    "type": "message_metrics",
                    "views": 1645
                },
                "current_revision": {
                    "type": "revision",
                    "id": "1",
                    "last_edit_author": {
                        "type": "user",
                        "id": "97805",
                        "href": "/users/97805",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/97805",
                        "login": "bungy15"
                    },
                    "last_edit_time": "2019-06-22T22:47:43.769-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '586282'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '586282'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '586282'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '586282'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '586282'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '586282'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '586282'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '586282'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '586282'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '586282'"
                },
                "moderation_status": "unmoderated",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "apple_ipad_ver1_sub11_4",
                "popularity": 4.640953970318719E-6,
                "excluded_from_kudos_leaderboards": false
            }, {
                "type": "message",
                "id": "583771",
                "href": "/messages/583771",
                "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/End-of-Payroll-Year-Guide-2019/td-p/583771",
                "author": {
                    "type": "user",
                    "id": "148971",
                    "href": "/users/148971",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/148971",
                    "login": "Natalier"
                },
                "subject": "End of Payroll Year Guide 2019",
                "search_snippet": "Good afternoon, I'm seeking the End of Payroll Year Guide for 2019.&nbsp; Is it available yet?&nbsp; If so, where can I find it?  &nbsp;  I find this resource invaluable.  &nbsp;  Also will new tax t...",
                "body": "<P>Good afternoon, I'm seeking the End of Payroll Year Guide for 2019.&nbsp; Is it available yet?&nbsp; If so, where can I find it?</P><P>&nbsp;</P><P>I find this resource invaluable.</P><P>&nbsp;</P><P>Also will new tax tables be available soon?</P><P>thank you!</P><P>&nbsp;</P>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "STPQnA",
                    "href": "/boards/STPQnA",
                    "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/bd-p/STPQnA"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "583771",
                    "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/End-of-Payroll-Year-Guide-2019/td-p/583771",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 5,
                    "solved": true,
                    "last_post_time": "2019-06-18T22:39:14.812-07:00",
                    "last_post_time_friendly": "June"
                },
                "topic": {
                    "type": "message",
                    "id": "583771",
                    "href": "/messages/583771",
                    "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/End-of-Payroll-Year-Guide-2019/m-p/583771#M3486"
                },
                "post_time": "2019-06-13T21:51:01.736-07:00",
                "post_time_friendly": "June",
                "depth": 0,
                "read_only": false,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": false,
                "solution_data": {},
                "metrics": {
                    "type": "message_metrics",
                    "views": 1790
                },
                "current_revision": {
                    "type": "revision",
                    "id": "1",
                    "last_edit_author": {
                        "type": "user",
                        "id": "148971",
                        "href": "/users/148971",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/148971",
                        "login": "Natalier"
                    },
                    "last_edit_time": "2019-06-13T21:51:01.736-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '583771'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '583771'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '583771'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '583771'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '583771'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '583771'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '583771'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '583771'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '583771'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '583771'"
                },
                "moderation_status": "unmoderated",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "google_chrome_74",
                "popularity": -3809.0864125,
                "excluded_from_kudos_leaderboards": false
            }, {
                "type": "message",
                "id": "583774",
                "href": "/messages/583774",
                "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/End-of-Payroll-Year-Guide-2019/m-p/583774#M3487",
                "author": {
                    "type": "user",
                    "id": "180487",
                    "href": "/users/180487",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/180487",
                    "login": "Haydes"
                },
                "subject": "Re: End of Payroll Year Guide 2019",
                "search_snippet": "Hi&nbsp;@Natalier&nbsp; \n &nbsp; \n The 2019 EOFY and EOPY PDF guides are now out, here are the links: \n \n EOFY 2019 \n EOPY 2019 \n \n &nbsp; \n I also quickly drafted up an EOPY process for those using ...",
                "body": "<P>Hi&nbsp;<a href=\"https://community.myob.com/t5/user/viewprofilepage/user-id/148971\">@Natalier</a>&nbsp;</P>\n<P>&nbsp;</P>\n<P>The 2019 EOFY and EOPY PDF guides are now out, here are the links:</P>\n<UL>\n<LI><A href=\"http://files.myob.com/help/AccountRight/Guides/MYOB-EOFY-GUIDE-2019.pdf\" target=\"_blank\" rel=\"noopener nofollow noopener noreferrer\">EOFY 2019</A></LI>\n<LI><A href=\"http://files.myob.com/help/AccountRight/Guides/MYOB-EOPY-GUIDE-2019.pdf\" target=\"_blank\" rel=\"noopener nofollow noopener noreferrer\">EOPY 2019</A></LI>\n</UL>\n<P>&nbsp;</P>\n<P>I also quickly drafted up an EOPY process for those using STP in AccountRight and MYOB Essentials, here are the links to those:</P>\n<UL>\n<LI><A href=\"https://community.myob.com/t5/short/link/m-p/580293#U580293\" target=\"_blank\" rel=\"noopener\">End of Payroll Year with STP - MYOB AccountRight 2019</A></LI>\n<LI><A href=\"https://community.myob.com/t5/short/link/m-p/580319#U580319\" target=\"_blank\" rel=\"noopener\">End of Payroll Year with STP - MYOB Essentials</A></LI>\n</UL>\n<P>&nbsp;</P>\n<P>Feel free to post again if you have any questions on these.</P>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "STPQnA",
                    "href": "/boards/STPQnA",
                    "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/bd-p/STPQnA"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "583771",
                    "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/End-of-Payroll-Year-Guide-2019/td-p/583771",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 5,
                    "solved": true,
                    "last_post_time": "2019-06-18T22:39:14.812-07:00",
                    "last_post_time_friendly": "June"
                },
                "topic": {
                    "type": "message",
                    "id": "583771",
                    "href": "/messages/583771",
                    "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/End-of-Payroll-Year-Guide-2019/m-p/583771#M3486"
                },
                "parent": {
                    "type": "message",
                    "id": "583771",
                    "href": "/messages/583771",
                    "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/End-of-Payroll-Year-Guide-2019/m-p/583771#M3486"
                },
                "post_time": "2019-06-13T22:03:01.748-07:00",
                "post_time_friendly": "June",
                "depth": 1,
                "read_only": false,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": true,
                "solution_data": {
                    "type": "solution_data",
                    "message_id": "583774",
                    "accepter": {
                        "type": "user",
                        "id": "49141",
                        "href": "/users/49141",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/49141",
                        "login": "Suja_P"
                    },
                    "time": "2019-06-16T01:07:43.000-07:00"
                },
                "metrics": {
                    "type": "message_metrics",
                    "views": 1782
                },
                "current_revision": {
                    "type": "revision",
                    "id": "1",
                    "last_edit_author": {
                        "type": "user",
                        "id": "180487",
                        "href": "/users/180487",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/180487",
                        "login": "Haydes"
                    },
                    "last_edit_time": "2019-06-13T22:03:01.748-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '583774'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '583774'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '583774'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '583774'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '583774'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '583774'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '583774'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '583774'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '583774'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '583774'"
                },
                "moderation_status": "approved",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "google_chrome_75",
                "popularity": 8.501410547626887E-6,
                "excluded_from_kudos_leaderboards": false
            }, {
                "type": "message",
                "id": "576752",
                "href": "/messages/576752",
                "view_href": "https://community.myob.com/t5/Moving-to-the-new-AccountRight/2019-2-forms-have-not-migrated/m-p/576752#M1240",
                "author": {
                    "type": "user",
                    "id": "49125",
                    "href": "/users/49125",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/49125",
                    "login": "Steven_M"
                },
                "subject": "Re: 2019.2 forms have not migrated",
                "search_snippet": "Hi Everyone \n   This is something that we do have one documented case on (which is&nbsp;@service119&nbsp;), while we have been able to replicate it internally we have only been able to do so once and...",
                "body": "<P>Hi Everyone</P>\n<P><BR />This is something that we do have one documented case on (which is&nbsp;<a href=\"https://community.myob.com/t5/user/viewprofilepage/user-id/199242\">@service119</a>&nbsp;), while we have been able to replicate it internally we have only been able to do so once and not been able to do so again on other computers or the same computer internally.<BR /><BR />So if other clients are encountering this situation with AccountRight 2019.2 we would love to hear that is the case so we can look into it further, Although, our current recommendation is to close down and reopen the company file this appears to correctly load the form.</P>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "MovingToNewAR",
                    "href": "/boards/MovingToNewAR",
                    "view_href": "https://community.myob.com/t5/Moving-to-the-new-AccountRight/bd-p/MovingToNewAR"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "575600",
                    "view_href": "https://community.myob.com/t5/Moving-to-the-new-AccountRight/2019-2-forms-have-not-migrated/td-p/575600",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 50,
                    "solved": true,
                    "last_post_time": "2019-09-16T23:44:53.020-07:00",
                    "last_post_time_friendly": "September"
                },
                "topic": {
                    "type": "message",
                    "id": "575600",
                    "href": "/messages/575600",
                    "view_href": "https://community.myob.com/t5/Moving-to-the-new-AccountRight/2019-2-forms-have-not-migrated/m-p/575600#M1189"
                },
                "parent": {
                    "type": "message",
                    "id": "576155",
                    "href": "/messages/576155",
                    "view_href": "https://community.myob.com/t5/Moving-to-the-new-AccountRight/2019-2-forms-have-not-migrated/m-p/576155#M1212"
                },
                "post_time": "2019-05-13T20:26:47.723-07:00",
                "post_time_friendly": "May",
                "depth": 3,
                "read_only": false,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": true,
                "solution_data": {
                    "type": "solution_data",
                    "message_id": "576752",
                    "accepter": {
                        "type": "user",
                        "id": "199242",
                        "href": "/users/199242",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/199242",
                        "login": "service119"
                    },
                    "time": "2019-05-13T20:31:10.000-07:00"
                },
                "metrics": {
                    "type": "message_metrics",
                    "views": 2081
                },
                "current_revision": {
                    "type": "revision",
                    "id": "1",
                    "last_edit_author": {
                        "type": "user",
                        "id": "49125",
                        "href": "/users/49125",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/49125",
                        "login": "Steven_M"
                    },
                    "last_edit_time": "2019-05-13T20:26:47.723-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '576752'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '576752'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '576752'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '576752'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '576752'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '576752'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '576752'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '576752'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '576752'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '576752'"
                },
                "moderation_status": "approved",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "google_chrome_74",
                "popularity": 9.753838905472151E-6,
                "excluded_from_kudos_leaderboards": false
            }, {
                "type": "message",
                "id": "607225",
                "href": "/messages/607225",
                "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/Confirm-Company-File/m-p/607225#M88283",
                "author": {
                    "type": "user",
                    "id": "49125",
                    "href": "/users/49125",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/49125",
                    "login": "Steven_M"
                },
                "subject": "Re: conirm Company File",
                "search_snippet": "Hi&nbsp;@boundtoimpress \n &nbsp; \n If you do have the option to Confirm Later in the Confirmation Assistant window then we do recommend selecting this option. This will allow you to access the compan...",
                "body": "<P>Hi&nbsp;<a href=\"https://community.myob.com/t5/user/viewprofilepage/user-id/147760\">@boundtoimpress</a></P>\n<P>&nbsp;</P>\n<P>If you do have the option to Confirm Later in the Confirmation Assistant window then we do recommend selecting this option. This will allow you to access the company file for a period of time (14 days) before confirmation would be required.</P>\n<P>&nbsp;</P>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "Accounting_Software_General",
                    "href": "/boards/Accounting_Software_General",
                    "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/bd-p/Accounting_Software_General"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "607207",
                    "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/Confirm-Company-File/td-p/607207",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 17,
                    "solved": true,
                    "last_post_time": "2019-09-02T13:33:26.346-07:00",
                    "last_post_time_friendly": "September"
                },
                "topic": {
                    "type": "message",
                    "id": "607207",
                    "href": "/messages/607207",
                    "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/Confirm-Company-File/m-p/607207#M88272"
                },
                "parent": {
                    "type": "message",
                    "id": "607213",
                    "href": "/messages/607213",
                    "view_href": "https://community.myob.com/t5/AccountRight-Getting-started/Confirm-Company-File/m-p/607213#M88277"
                },
                "post_time": "2019-09-01T16:16:58.049-07:00",
                "post_time_friendly": "September",
                "depth": 3,
                "read_only": false,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": true,
                "solution_data": {
                    "type": "solution_data",
                    "message_id": "607225",
                    "accepter": {
                        "type": "user",
                        "id": "206380",
                        "href": "/users/206380",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/206380",
                        "login": "rach2"
                    },
                    "time": "2019-09-01T17:08:44.000-07:00"
                },
                "metrics": {
                    "type": "message_metrics",
                    "views": 700
                },
                "current_revision": {
                    "type": "revision",
                    "id": "1",
                    "last_edit_author": {
                        "type": "user",
                        "id": "49125",
                        "href": "/users/49125",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/49125",
                        "login": "Steven_M"
                    },
                    "last_edit_time": "2019-09-01T16:16:58.049-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '607225'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '607225'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '607225'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '607225'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '607225'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '607225'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '607225'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '607225'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '607225'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '607225'"
                },
                "moderation_status": "approved",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "google_chrome_76",
                "popularity": -1894.6541072222221,
                "excluded_from_kudos_leaderboards": false
            }, {
                "type": "message",
                "id": "575600",
                "href": "/messages/575600",
                "view_href": "https://community.myob.com/t5/Moving-to-the-new-AccountRight/2019-2-forms-have-not-migrated/td-p/575600",
                "author": {
                    "type": "user",
                    "id": "199242",
                    "href": "/users/199242",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/199242",
                    "login": "service119"
                },
                "subject": "2019.2 forms have not migrated",
                "search_snippet": "I have just installed AcountRight V 2019.2 onto my computer, but no matter what I try, my customised forms will not migrate or import as they were before.&nbsp; How do I fix this without having to ma...",
                "body": "<P>I have just installed AcountRight V 2019.2 onto my computer, but no matter what I try, my customised forms will not migrate or import as they were before.&nbsp; How do I fix this without having to manual customise them all again?</P>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "MovingToNewAR",
                    "href": "/boards/MovingToNewAR",
                    "view_href": "https://community.myob.com/t5/Moving-to-the-new-AccountRight/bd-p/MovingToNewAR"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "575600",
                    "view_href": "https://community.myob.com/t5/Moving-to-the-new-AccountRight/2019-2-forms-have-not-migrated/td-p/575600",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 50,
                    "solved": true,
                    "last_post_time": "2019-09-16T23:44:53.020-07:00",
                    "last_post_time_friendly": "September"
                },
                "topic": {
                    "type": "message",
                    "id": "575600",
                    "href": "/messages/575600",
                    "view_href": "https://community.myob.com/t5/Moving-to-the-new-AccountRight/2019-2-forms-have-not-migrated/m-p/575600#M1189"
                },
                "post_time": "2019-05-07T17:35:43.850-07:00",
                "post_time_friendly": "May",
                "depth": 0,
                "read_only": false,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": false,
                "solution_data": {},
                "metrics": {
                    "type": "message_metrics",
                    "views": 2138
                },
                "current_revision": {
                    "type": "revision",
                    "id": "1",
                    "last_edit_author": {
                        "type": "user",
                        "id": "199242",
                        "href": "/users/199242",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/199242",
                        "login": "service119"
                    },
                    "last_edit_time": "2019-05-07T17:35:43.850-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '575600'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '575600'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '575600'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '575600'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '575600'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '575600'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '575600'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '575600'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '575600'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '575600'"
                },
                "moderation_status": "unmoderated",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "google_chrome_74",
                "popularity": 3.1002038139025714E-6,
                "excluded_from_kudos_leaderboards": false
            }, {
                "type": "message",
                "id": "589848",
                "href": "/messages/589848",
                "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/STP-Lodgement-error/td-p/589848",
                "author": {
                    "type": "user",
                    "id": "203850",
                    "href": "/users/203850",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/203850",
                    "login": "Larissa1"
                },
                "subject": "STP Lodgement error",
                "search_snippet": "Getting the below issue even after i spent over an hour on hour and got told that it had been fixed  &nbsp;  Your submission was not processed (ATO error code: CMN.ATO.PAYEVNT.EM92168)  &nbsp;  How a...",
                "body": "<DIV><DIV><DIV class=\"container\"><DIV><DIV><DIV><DIV><P>Getting the below issue even after i spent over an hour on hour and got told that it had been fixed</P><P>&nbsp;</P><P>Your submission was not processed<!--   /react-text   --><!--   react-text: 1027   --> (ATO error code: CMN.ATO.PAYEVNT.EM92168)</P><P>&nbsp;</P><P>How an i meant to know why the submission was not processed&nbsp;</P></DIV></DIV></DIV></DIV></DIV></DIV></DIV>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "STPQnA",
                    "href": "/boards/STPQnA",
                    "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/bd-p/STPQnA"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "589848",
                    "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/STP-Lodgement-error/td-p/589848",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 12,
                    "solved": true,
                    "last_post_time": "2019-07-18T23:48:41.482-07:00",
                    "last_post_time_friendly": "July"
                },
                "topic": {
                    "type": "message",
                    "id": "589848",
                    "href": "/messages/589848",
                    "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/STP-Lodgement-error/m-p/589848#M4555"
                },
                "post_time": "2019-06-30T18:44:07.527-07:00",
                "post_time_friendly": "July",
                "depth": 0,
                "read_only": false,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": false,
                "solution_data": {},
                "metrics": {
                    "type": "message_metrics",
                    "views": 1161
                },
                "current_revision": {
                    "type": "revision",
                    "id": "1",
                    "last_edit_author": {
                        "type": "user",
                        "id": "203850",
                        "href": "/users/203850",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/203850",
                        "login": "Larissa1"
                    },
                    "last_edit_time": "2019-06-30T18:44:07.527-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '589848'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '589848'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '589848'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '589848'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '589848'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '589848'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '589848'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '589848'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '589848'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '589848'"
                },
                "moderation_status": "unmoderated",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "google_chrome_75",
                "popularity": -3404.2014761111113,
                "excluded_from_kudos_leaderboards": false
            }, {
                "type": "message",
                "id": "613369",
                "href": "/messages/613369",
                "view_href": "https://community.myob.com/t5/AccountRight-Installing-and/Bank-feeds-not-able-to-reconcile-following-work-around-for-known/td-p/613369",
                "author": {
                    "type": "user",
                    "id": "18767",
                    "href": "/users/18767",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/18767",
                    "login": "sal2107"
                },
                "subject": "Bank feeds - not able to reconcile following work around for known problem in Accountright V 2019.3",
                "search_snippet": "I managed to find a post yesterday (and now can't find it again, possibly due to the lack of appropriate board locations to post to) regarding the problem with Bank Feeds following the latest upgrade...",
                "body": "<P>I managed to find a post yesterday (and now can't find it again, possibly due to the lack of appropriate board locations to post to) regarding the problem with Bank Feeds following the latest upgrade to V19.3. The work around is to drill into the transaction from Bank Feeds and change the ID number to&nbsp;that which you need it to be rather than the default next cheque number that is happening at the moment with 'rule applied' transactions in Bank Feeds.</P><P>Can someone please give me a work around now for after doing that, the transactions keep reappearing as unreconciled in Bank Feeds? They are also reappearing as duplicated transactions in Reconcile Accounts.</P><P>I am not able to reconcile our bank accounts using Bank Feeds at all, and&nbsp;who knows what kind of mess it will be in when the planned fix takes place.</P><P>Is anyone else having this problem? Yes, I have shut down MYOB and restarted again.</P><P>Thanks</P>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "InstallingUpgrading",
                    "href": "/boards/InstallingUpgrading",
                    "view_href": "https://community.myob.com/t5/AccountRight-Installing-and/bd-p/InstallingUpgrading"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "613369",
                    "view_href": "https://community.myob.com/t5/AccountRight-Installing-and/Bank-feeds-not-able-to-reconcile-following-work-around-for-known/td-p/613369",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 5,
                    "solved": true,
                    "last_post_time": "2019-10-23T16:51:25.560-07:00",
                    "last_post_time_friendly": "4 weeks ago"
                },
                "topic": {
                    "type": "message",
                    "id": "613369",
                    "href": "/messages/613369",
                    "view_href": "https://community.myob.com/t5/AccountRight-Installing-and/Bank-feeds-not-able-to-reconcile-following-work-around-for-known/m-p/613369#M40850"
                },
                "post_time": "2019-10-07T21:08:02.863-07:00",
                "post_time_friendly": "a month ago",
                "depth": 0,
                "read_only": false,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": false,
                "solution_data": {},
                "metrics": {
                    "type": "message_metrics",
                    "views": 414
                },
                "current_revision": {
                    "type": "revision",
                    "id": "1",
                    "last_edit_author": {
                        "type": "user",
                        "id": "18767",
                        "href": "/users/18767",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/18767",
                        "login": "sal2107"
                    },
                    "last_edit_time": "2019-10-07T21:08:02.863-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '613369'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '613369'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '613369'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '613369'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '613369'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '613369'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '613369'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '613369'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '613369'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '613369'"
                },
                "moderation_status": "unmoderated",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "msie_11",
                "popularity": 6.069673330813408E-5,
                "excluded_from_kudos_leaderboards": false
            }, {
                "type": "message",
                "id": "591845",
                "href": "/messages/591845",
                "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/STP-Lodgement-error/m-p/591845#M5204",
                "author": {
                    "type": "user",
                    "id": "49125",
                    "href": "/users/49125",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/49125",
                    "login": "Steven_M"
                },
                "subject": "Re: STP Lodgement error",
                "search_snippet": "Hi&nbsp;@LIANNE&nbsp;&nbsp;@Larissa1&nbsp;&nbsp;@Debra_Jeffrey&nbsp; \n &nbsp; \n If you are getting a rejection when sending your payroll data to the ATO Help Article:&nbsp;Fix rejected reports in Sin...",
                "body": "<P>Hi&nbsp;<a href=\"https://community.myob.com/t5/user/viewprofilepage/user-id/190907\">@LIANNE</a>&nbsp;&nbsp;<a href=\"https://community.myob.com/t5/user/viewprofilepage/user-id/203850\">@Larissa1</a>&nbsp;&nbsp;<a href=\"https://community.myob.com/t5/user/viewprofilepage/user-id/2247\">@Debra_Jeffrey</a>&nbsp;</P>\n<P>&nbsp;</P>\n<P>If you are getting a rejection when sending your payroll data to the ATO Help Article:&nbsp;<A href=\"http://help.myob.com/wiki/x/15KyAQ\" target=\"_self\" rel=\"nofollow noopener noreferrer\">Fix rejected reports in Single Touch Payroll</A> does include the common rejection errors, what is occurring and how to address them.</P>\n<P><BR /><EM>For example,&nbsp;CMN.ATO.PAYEVT.EN92168 is caused by doing an update in a previous year when STP reporting did not occur. For these situations, a payment summary would be required those employees.</EM></P>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "STPQnA",
                    "href": "/boards/STPQnA",
                    "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/bd-p/STPQnA"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "589848",
                    "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/STP-Lodgement-error/td-p/589848",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 12,
                    "solved": true,
                    "last_post_time": "2019-07-18T23:48:41.482-07:00",
                    "last_post_time_friendly": "July"
                },
                "topic": {
                    "type": "message",
                    "id": "589848",
                    "href": "/messages/589848",
                    "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/STP-Lodgement-error/m-p/589848#M4555"
                },
                "parent": {
                    "type": "message",
                    "id": "590538",
                    "href": "/messages/590538",
                    "view_href": "https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/STP-Lodgement-error/m-p/590538#M4777"
                },
                "post_time": "2019-07-02T19:24:57.881-07:00",
                "post_time_friendly": "July",
                "depth": 2,
                "read_only": false,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": true,
                "solution_data": {
                    "type": "solution_data",
                    "message_id": "591845",
                    "accepter": {
                        "type": "user",
                        "id": "203850",
                        "href": "/users/203850",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/203850",
                        "login": "Larissa1"
                    },
                    "time": "2019-07-18T23:35:43.000-07:00"
                },
                "metrics": {
                    "type": "message_metrics",
                    "views": 1054
                },
                "current_revision": {
                    "type": "revision",
                    "id": "1",
                    "last_edit_author": {
                        "type": "user",
                        "id": "49125",
                        "href": "/users/49125",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/49125",
                        "login": "Steven_M"
                    },
                    "last_edit_time": "2019-07-02T19:24:57.881-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '591845'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '591845'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '591845'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '591845'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '591845'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '591845'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '591845'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '591845'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '591845'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '591845'"
                },
                "moderation_status": "approved",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "google_chrome_75",
                "popularity": 1.0280208503712263E-5,
                "excluded_from_kudos_leaderboards": false
            }, {
                "type": "message",
                "id": "587626",
                "href": "/messages/587626",
                "view_href": "https://community.myob.com/t5/AccountRight-Staffing-and/STP-Year-to-date-reporting-incorrect-ETPs/m-p/587626#M43860",
                "author": {
                    "type": "user",
                    "id": "97805",
                    "href": "/users/97805",
                    "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/97805",
                    "login": "bungy15"
                },
                "subject": "Re: STP Year to date reporting incorrect",
                "search_snippet": "Hi&nbsp;@Stins&nbsp;@AnneCam&nbsp;@Jaffa28&nbsp;  &nbsp;  I just saw this post by Steven which may help -&nbsp;ETP appearing as double   &nbsp;  Good luck  Tracey",
                "body": "<P>Hi&nbsp;<a href=\"https://community.myob.com/t5/user/viewprofilepage/user-id/130408\">@Stins</a>&nbsp;<a href=\"https://community.myob.com/t5/user/viewprofilepage/user-id/183405\">@AnneCam</a>&nbsp;<a href=\"https://community.myob.com/t5/user/viewprofilepage/user-id/203856\">@Jaffa28</a>&nbsp;</P><P>&nbsp;</P><P>I just saw this post by Steven which may help -&nbsp;<A href=\"https://community.myob.com/t5/Single-Touch-Payroll-STP-Q-A/ETP-Early-Termination-Payment-appearing-as-double-in-the-Payroll/td-p/587486\" target=\"_self\">ETP appearing as double </A></P><P>&nbsp;</P><P>Good luck</P><P>Tracey</P>",
                "teaser": "",
                "board": {
                    "type": "board",
                    "id": "Staffing_and_Payroll",
                    "href": "/boards/Staffing_and_Payroll",
                    "view_href": "https://community.myob.com/t5/AccountRight-Staffing-and/bd-p/Staffing_and_Payroll"
                },
                "conversation": {
                    "type": "conversation",
                    "id": "587561",
                    "view_href": "https://community.myob.com/t5/AccountRight-Staffing-and/STP-Year-to-date-reporting-incorrect-ETPs/td-p/587561",
                    "style": "forum",
                    "thread_style": "forum",
                    "messages_count": 14,
                    "solved": true,
                    "last_post_time": "2019-07-10T17:27:08.159-07:00",
                    "last_post_time_friendly": "July"
                },
                "topic": {
                    "type": "message",
                    "id": "587561",
                    "href": "/messages/587561",
                    "view_href": "https://community.myob.com/t5/AccountRight-Staffing-and/STP-Year-to-date-reporting-incorrect-ETPs/m-p/587561#M43842"
                },
                "parent": {
                    "type": "message",
                    "id": "587619",
                    "href": "/messages/587619",
                    "view_href": "https://community.myob.com/t5/AccountRight-Staffing-and/STP-Year-to-date-reporting-incorrect-ETPs/m-p/587619#M43857"
                },
                "post_time": "2019-06-25T23:35:54.975-07:00",
                "post_time_friendly": "June",
                "depth": 3,
                "read_only": false,
                "language": "EN",
                "can_accept_solution": false,
                "placeholder": false,
                "is_solution": true,
                "solution_data": {
                    "type": "solution_data",
                    "message_id": "587626",
                    "accepter": {
                        "type": "user",
                        "id": "130408",
                        "href": "/users/130408",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/130408",
                        "login": "Stins"
                    },
                    "time": "2019-06-26T00:09:49.000-07:00"
                },
                "metrics": {
                    "type": "message_metrics",
                    "views": 1085
                },
                "current_revision": {
                    "type": "revision",
                    "id": "1",
                    "last_edit_author": {
                        "type": "user",
                        "id": "97805",
                        "href": "/users/97805",
                        "view_href": "https://community.myob.com/t5/user/viewprofilepage/user-id/97805",
                        "login": "bungy15"
                    },
                    "last_edit_time": "2019-06-25T23:35:54.975-07:00"
                },
                "kudos": {
                    "query": "SELECT * FROM kudos WHERE message.id = '587626'"
                },
                "tags": {
                    "query": "SELECT * FROM tags WHERE messages.id = '587626'"
                },
                "me_toos": {
                    "query": "SELECT * FROM me_toos WHERE message.id = '587626'"
                },
                "labels": {
                    "query": "SELECT * FROM labels WHERE messages.id = '587626'"
                },
                "images": {
                    "query": "SELECT * FROM images WHERE messages.id = '587626'"
                },
                "videos": {
                    "query": "SELECT * FROM videos WHERE messages.id = '587626'"
                },
                "attachments": {
                    "query": "SELECT * FROM attachments WHERE message.id = '587626'"
                },
                "replies": {
                    "query": "SELECT * FROM messages WHERE parent.id = '587626'"
                },
                "ratings": {
                    "query": "SELECT * FROM ratings WHERE message.id = '587626'"
                },
                "custom_tags": {
                    "query": "SELECT * FROM custom_tags WHERE messages.id = '587626'"
                },
                "moderation_status": "unmoderated",
                "user_context": {
                    "type": "user_context",
                    "kudo": false,
                    "me_too": false,
                    "read": false,
                    "can_reply": false,
                    "can_kudo": false,
                    "can_delete": false
                },
                "device_id": "apple_ipad_ver1_sub11_4",
                "popularity": 1.435686541364879E-5,
                "excluded_from_kudos_leaderboards": false
            }],
            "next_cursor": "AAAADJfqhjTW0b0y6LcM9Dod7dYVmPAuUF4_BtCCMZEZY02PCHgK1xtH"
        },
        "metadata": {}
    };
}