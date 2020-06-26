versions:
	which		$(PYTHON)
	$(PYTHON)	--version

models.html: models.py
	$(PYDOC) -w models.p > models.html

data.log:
	git log > data.log