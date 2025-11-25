## Password
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
## Social Security Number

| Testname            | *Correct* | *NoLenCheck* | *NoTrim* |  *NumberNoLuhn* | *WrongYear* |
|---|---|---|---|---|---|
| Length invalid      | ✅  | ❌ | ✅ | ✅ | ✅ |  
| String not trimmed  | ✅  | ✅ | ❌ | ✅ | ✅ |   
| Luhn alg invalid    | ✅  | ✅ | ✅ | ❌ | ✅ | 
| First 2 digits      | ✅  | ✅ | ✅ | ✅ | ❌ | 
| Format invalid      | ✅  | ✅ | ✅ | ✅ | ✅ |  
| Month invalid       | ✅  | ✅ | ✅ | ✅ | ✅ | 
| Day invalid         | ✅  | ✅ | ✅ | ✅ | ✅ |  
| Last 4 digits       | ✅  | ✅ | ✅ | ✅ | ✅ |  
| Coverage            | 100% | 100% | 100% | 100% | 100% |


---
## Helper

| Testname            | *Correct* | *Allow Month 0* | *Wrong Length* |  *Incorrect Format* | *Allow day 30* | *Messy Luhn* |
|---|---|---|---|---|---|---|
| Invalid Length      | ✅  | ✅ | ❌ | ✅ | ✅ | ✅ | 
| Invalid month       | ✅  | ❌ | ✅ | ✅ | ✅ | ✅ |
| Valid day           | ✅  | ✅ | ✅ | ✅ | ❌ | ✅ |
| invalid format      | ✅  | ✅ | ✅ | ❌ | ✅ | ✅ |
| Valid luhnsCorrect  | ✅  | ✅ | ✅ | ✅ | ✅ | ❌ | 
| Valid month         | ✅  | ✅ | ✅ | ✅ | ✅ | ✅ | 
| Coverage            | 100% | 100% | 100% | 100% | 100% |100% |