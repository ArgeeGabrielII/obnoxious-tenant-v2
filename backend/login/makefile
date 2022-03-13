deploy:
	gcloud config set project linear-stock-341504
	gcloud functions deploy sw_checkLogin  --entry-point checkLogin --runtime nodejs16 --trigger-http --allow-unauthenticated --region asia-east2 --env-vars-file .env.yaml