deploy:
	gcloud config set project linear-stock-341504
	gcloud functions deploy emailValidator --entry-point emailValidator --runtime nodejs16 --trigger-http --allow-unauthenticated --region asia-east2