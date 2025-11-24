| Testname       | *Correct* | *NotHash* | *NoTrim* |  *PassAlwaysSame* | *MissingNumberCheck* | *MissingPasswordCheck* | *ContainsNumber* | *ShortPassword* | *VeryShort* | *WrongHashAlg* | *Wrong Message* | *My Bug* |
|---|---|---|---|---|---|---|---|---|---|---|---| ---|
| InstanceOf Password argument  | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | 
| Short passwords               | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ | ✅ |  
| Trim passwords                | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |   
| Passwords without numbers     | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |  
| Passwords with numbers        | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |  
| Password hashing              | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ | 
| Same password check           | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | 
| Coverage                      | 100% | 100% | 100% | 100% | 93% | 93% | 41.7% | 100% | 100% | 100% | 100% | 100% | 

---

| Testname            | *Correct* | *NoLenCheck* | *NoTrim* |  *NumberNoLuhn* | *WrongYear* |
|---|---|---|---|---|---|
| Length invalid      | ✅ | ❌ | ✅ | ✅ | ✅ |  
| String not trimmed  | ✅ | ✅ | ❌ | ✅ | ✅ |   
| Luhn alg invalid    | ✅ | ✅ | ✅ | ❌ | ✅ | 
| First 2 digits      | ✅ | ✅ | ✅ | ✅ | ❌ | 
| Format invalid      | ✅ | ✅ | ✅ | ✅ | ✅ |  
| Month invalid       | ✅ | ✅ | ✅ | ✅ | ✅ | 
| Day invalid         | ✅ | ✅ | ✅ | ✅ | ✅ |  
| Last 4 digits       | ✅ | ✅ | ✅ | ✅ | ✅ |  
| Coverage            | 100% | 100% | 100% | 100% | 100% |