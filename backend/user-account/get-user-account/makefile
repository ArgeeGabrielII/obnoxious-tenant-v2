deploy:
	gcloud config set project linear-stock-341504
	gcloud functions deploy getUserAccountDetails --entry-point getUserAccountDetails --runtime nodejs16 --trigger-http --allow-unauthenticated --region asia-east2 --env-vars-file .env.yaml