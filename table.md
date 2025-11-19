| Version       | Correct | NotHash | NoTrim |  PassAlwaysSame | MissingNumberCheck | MissingPasswordCheck | ContainsNumber | ShortPassword | VeryShort | WrongHash | Wrong Message |
| --- | ---| --- | --- | --- | --- | --- | ---| --- | --- | --- | --- | --- | ---| --- | --- | --- | --- |
| InstanceOf Password argument  | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Same password check           | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Short passwords               | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Passwords without numbers     | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Passwords with numbers        | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Password hashing              | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Same password check           | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Coverage                      | 100% | 100% | 100% | 100% | 93% | 93% | 100% | 100% | 100% | 100% | 100% | 100% | 100% | 100% | 100% |