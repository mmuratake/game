.PHONY: all
all:
	gradle build

.PHONY: clean
clean:
	gradle clean

.PHONY: test
test:
	gradle test

.PHONY: run
run:
	gradle run
