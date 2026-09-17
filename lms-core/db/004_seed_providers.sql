INSERT INTO integration_providers(slug,display_name,category,protocol,description_en,capabilities,status) VALUES
('google-classroom','Google Classroom','lms','oauth2','Roster and assignment integration.','{roster_sync,grade_passback,sso,content_launch}','available'),
('microsoft-teams-edu','Microsoft Teams for Education','lms','oauth2','Roster and assignment integration.','{roster_sync,grade_passback,sso}','available'),
('moodle','Moodle','lms','lti_1_3','LTI launch and grade passback.','{sso,content_launch,grade_passback}','available'),
('canvas','Instructure Canvas','lms','lti_1_3','LTI launch and grade passback.','{sso,content_launch,grade_passback}','available'),
('oneroster','OneRoster CSV / API','sis','oneroster','Standards-based roster import.','{roster_sync}','available'),
('scorm-package','SCORM Package','content','scorm','SCORM learning package integration.','{content_launch}','available'),
('xapi-lrs','xAPI / Learning Record Store','analytics','xapi','Learning event export.','{analytics_export}','available'),
('zoom','Zoom','video','oauth2','Live class session integration.','{content_launch}','available'),
('vimeo','Vimeo','video','api_key','Hosted lesson video integration.','{content_launch}','available'),
('zalo-oa','Zalo Official Account','comms','api_key','Parent progress communications.','{analytics_export}','available'),
('generic-webhook','Generic Webhook','other','webhook','HTTPS event delivery for any endpoint.','{analytics_export}','available'),
('custom-rest','Custom REST Connector','other','api_key','Configurable REST integration for third-party tools.','{roster_sync,grade_passback,analytics_export}','available')
ON CONFLICT(slug) DO NOTHING;
