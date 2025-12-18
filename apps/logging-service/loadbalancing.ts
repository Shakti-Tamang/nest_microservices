// 1️⃣ Where load balancing ACTUALLY happens

// 👉 Load balancing happens in 3 possible places, not just one.

// 2️⃣ Load balancing at API Gateway level (MOST IMPORTANT)
// Flow
// Client
//   ↓
// API Gateway  (Load Balancer)
//   ↓
// Ride Service (instance 1)
// Ride Service (instance 2)
// Ride Service (instance 3)

// What happens

// You run multiple instances of the same service

// Gateway distributes requests:

// Round-robin

// Least connections

// Weighted

// Tools used

// Nginx

// Kong

// AWS ALB

// Kubernetes Service

// NestJS behind a reverse proxy

// 📌 This is the primary load balancing in real systems

// 3️⃣ Load balancing with RabbitMQ (automatic)
// Flow
// API Gateway
//    ↓
// RabbitMQ Queue
//    ↓
// Order Service (instance 1)
// Order Service (instance 2)
// Order Service (instance 3)

// What RabbitMQ does

// Multiple consumers listen to the same queue

// Messages are evenly distributed

// If one service is slow → others pick messages

// 📌 RabbitMQ itself acts as a load balancer

// ✅ No extra config needed
// ✅ Horizontal scaling becomes easy

// 4️⃣ Load balancing at service-to-service (HTTP)

// If services talk via HTTP:

// Service A
//    ↓
// Service Registry (Consul/Eureka)
//    ↓
// Service B (multiple instances)


// Load balancing done by:

// Spring Cloud LoadBalancer

// Kubernetes DNS

// Envoy / Istio

// 📌 Optional if you use RabbitMQ heavily

// 5️⃣ Where YOU are using load balancing now
// In your current setup
// Component	Load balancing
// API Gateway → Services	❌ (single instance now)
// RabbitMQ → Consumers	✅ YES
// MongoDB	❌
// TCP	❌

// 👉 You already HAVE load balancing via RabbitMQ

// 6️⃣ Real ride-sharing example (Uber-like)
// Ride creation
// Client → API Gateway
//               ↓
//           Ride Queue (RabbitMQ)
//               ↓
//       Ride Service x10 instances

// Payment
// Payment Queue
//    ↓
// Payment Service x5 instances


// Each instance:

// Picks messages independently

// No conflicts

// High throughput

// 7️⃣ Why RabbitMQ makes scaling EASY

// Without RabbitMQ:

// You must manage service discovery

// You must manage retries

// You must manage failures

// With RabbitMQ:

// Fire & forget

// Automatic retry

// Built-in load balancing

// 8️⃣ Final 1-line answer (interview ready)

// Load balancing happens at the API Gateway for incoming requests and at RabbitMQ queues for distributing work across multiple service instances.

// 9️⃣ When to add Kubernetes / Nginx?

// Add when:

// Traffic increases

// Multiple deployments needed

// Autoscaling required

// Until then:
// ✅ API Gateway + RabbitMQ = perfect

// You’re now asking production-grade architecture questions 👌
// If you want, next I can explain:

// How Kubernetes load balances

// Nginx vs API Gateway

// Why Uber uses Kafka + gRPC

// How retries & fault tolerance work