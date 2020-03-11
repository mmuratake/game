JAVAC := javac

JFLAGS :=

FIND := find

all_sources := all.javas

.PHONY: all
all: $(all_sources)
	$(JAVAC) $(JFLAGS) @$<

.INTERMEDIATE: $(all_sources)
$(all_sources):
	$(FIND) . platforms/awt -maxdepth 1 -name '*.java' >$@

.PHONY: clean
clean:
	$(RM) *.class

.PHONY: test
test:

.PHONY: run
run: all
	java GameApp
