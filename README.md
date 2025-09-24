# Live Auction API

Since most of my contributions are made to private repositories, many recruiters and hiring mnanagers have expressed a desire for
a public repository where they can see some code.

Recently, I've been interested in stream processing and building durable, performant systems, mostly stemming from an [awesome paper](https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying) I read a while ago by LinkedIn.

I felt like this project would be the perfect showcase of what I've learned since graduating 2 years ago and serve as a playground for me to explore live data streaming, database migrations, and Kafka.

## Goals and Objectives

The main goals I have for this project are

1. Get a stronger grasp on database administration and the SQL language
2. Write a robust test suite that hardens the correct surface while leaving the rest malleable
3. Benchmark at scale
4. Experiment with Kafka and Websockets
5. Create CI/CD pipelines to speed up real-world deployments.
6. "Functional Core, Imperative Shell" approach to services.
7. Continue my never-ending practice of translating business constraints into software.

Since I've mainly been working in startups for the past 2 years, I haven't had as much time as I'd like to explore robust, long-term programming as I'd have liked. This is why I want to intentionally set aside time to go deep into the weeds.

For example, writing SQL queries from scratch again, spinning up and diving into the weeds of postgres databases, and WRITING TESTS (a severely underdeveloped skill in the early-stage startup world).

Most of all, I'm hoping to have fun while delivering a concrete showcase of my learnings.

## Guidelines

With these goals in mind, I'm going to be adhering to a few guidelines throughout the course of this project:

1. Raw SQL queries, no ORMs

   - Here, I have an opportunity to return to raw SQL that isn't usually readily available in business environments. Hoping to learn query efficiencies to better take advantage of ORMs when I do inevitably return to them.

2. Raw SQL Migrations ONLY

   - I've never actually written migrations by hand before. I've always been intrigued, but recently after switching to a new project with a horrible migrations management process, I'd like to really dive deep and understand migrations from bottom-up. Limiting myself to RAW SQL migrations will push me to feel the pain points solved by modern day tools while also giving me a first-hand account of what drove the inception of said tools.

3. "Functional Core, Imperative Shell" Approach

   - After reading [Domain Modeling Made Functional by Scott Wlaschin](https://fsharpforfunandprofit.com/books/), I've been extremely intrigued with the idea of extracting as much logic as possible into a "Functional Core". This approach seems like it'll provide an outsized impact on testability, business rule mobility, and general code malleability, so I'd like to really give it a go here.

4. Innovate on Architecture, not technology.

   - Although I want to dive deep, I don't want to dive deep into the wrong pond. There are problems that are simply "solved" from an adoption standpoint—authentication/session-management, for example. I've already done my due diligence in authentication & authorization on past projects, so I will be minimizing time spent on these problems as much as possible.

     - For solved problems, speed of learning and adoption will be prioritized in this project.

   - This also means I will be sticking to languages I know, not learning the optimal language. Learning a language is not a useful innovation for me at this point—I know I can pick up languages fast and with rigor.

5. The project is not complete without real-world benchmarks.

   - I want this to be a project that demonstrates my growth in producing systems at scale. Thus, I'll be developing benchmarks that will try to reflect a real-world system. I'm sure I'll learn a lot in the process (both about benchmarking AND about performance bottlenecks).

6. Write ALL kinds of tests.

   - I want to take this project as an opportunity to utilize tests to their fullest. Tests are an AMAZING tool for ensuring robustness and are drastically underutilized in the early-stage startup world.
   - This means writing Unit Tests, Integration Tests, End-to-End tests—you name it. I want to use them in a way that does not detract from development time, but speeds up overall developer velocity.
     - Chasing code coverage is NOT the goal. Instead, it's to harden business rules and constraints as we expand our knowledge of the live auction domain. Blindly chasing code coverage can and, in most situations, _does_ slow down developer velocity. Every line of tests you write is also a maintenance burden. If they don't pull their weight, you're not only spending current developer time to write them, but you're wasting future developer time for maintenace.

7. Implement a monitorable, scalable, distributed system
   - More experience with this is never a bad thing. Terraform/OpenTofu, AWS, Kubernetes, CI/CD pipelines — we're 100% using them.
   - I would like to experiment with the "golden image" containerized approach via Packer or QEMU.
