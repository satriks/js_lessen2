import time

is_prime = lambda n: all( n%i for i in range(2, int(n**0.5)+1) )

def prime_list (n) :
    primes = []
    i = 2 
    while len(primes) < n:
        if is_prime(i):
            primes.append(i)
        i += 1
    print(primes)


stime = time.time()
prime_list(1000)    
print((time.time()- stime)*1000, 'мс')
