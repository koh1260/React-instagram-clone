function Login() {
  function onClick(event) {
    event.preventDefault();
  }

  return (
    <div>
      <h1>Instagram</h1>
      {/* 로그인 ~ 비밀번호 찾기 */}
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log("submit");
          }}
        >
          <div>
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
          </div>
          <div>
            <button>로그인</button>
          </div>
          <div>
            <h4>---------- 또는 ----------</h4>
          </div>
          <div>
            <button>Facebook으로 로그인</button>
          </div>
        </form>
      </div>
      <a href="#">비밀번호를 잊으셨나요?</a>

        {/* 가입하기 */}
          <div>
            <p>
                계정이 없으신가요? 
                <a href="#"> 가입하기</a>
            </p>
          </div>

          {/* 앱 다운로드 */}
          <div>
            <div>
                <p>
                    앱을 다운로드하세요.
                </p>
            </div>
            <div>
                <a href="#">
                    App Store
                </a>
                <a href="#">
                    |Google Play
                </a>
            </div>
          </div>
    </div>
  );
}
export default Login;
