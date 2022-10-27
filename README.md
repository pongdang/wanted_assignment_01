## commit msg 규칙

### 1. 커밋 유형 지정하기

⭐ feat : 새로운 기능에 대한 커밋

🛠 fix : 버그 수정에 대한 커밋

🧱 build : 빌드 관련 파일 수정에 대한 커밋

👏 chore : 그 외 자잘한 수정에 대한 커밋

⚒ refactor :  코드 리팩토링에 대한 커밋

🎨 style : 코드 스타일 혹은 포맷 등에 관한 커밋

✏ docs : 문서 수정에 대한 커밋

💡 ci : CI관련 설정 수정에 대한 커밋

## [✨ 배포링크](https://wanted-assignment-01.vercel.app)

## 작업한 내용

### 1. Context API를 활용한 라우터 가드 처리 (with HoC)

**Context API**로 유저의 로그인 상태를 전역에서 관리할 수 있도록 하였고 상태에 따라 접근할 수 있는 라우터를 처리했습니다.

- HoC로 작성된 함수에서 접근 대상에 따른 페이지의 타입(`member | guest`)을 명시하여 isLogin 상태와 비교합니다.
- 로그인하지 않은 상태(`isLogin === false`)에서 member들만 접근할 수 있는 페이지(`/todo`)를 접근하려 한다면 로그인 페이지(`/`) 로 리다이렉트 시켜줍니다.
- 로그인한 상태(`isLogin === true`)에서 guest들만 접근할 수 있는 페이지(`/`, `/signup`)을 접근하려 한자면 투두 페이지(`/todo`) 로 리다이렉트 시켜줍니다.

### 2. Suspense 를 이용한 선언적인 비동기 함수 처리의 로딩처리

**Suspense**를 활용하면 비동기 함수 호출의 상태에 따라 UI 를 선언적으로 보여줄 수 있습니다.

- [Suspense의 원리](https://dev.to/charlesstover/react-suspense-with-the-fetch-api-374j)에 대해 찾아보고, 이를 참고하여 라이브러리(react-query, Relay) 없이 사용할 수 있도록 필요한 부분만 useFetch로 재구현하였습니다.
- 로딩 중일 때는 Promise를 throw 하여 Suspense 에서 fallback 엘리먼트를 렌더링하도록 합니다.
- useFetch 에서 invalidate 함수를 얻어서 특정 쿼리(fetchTodoList)를 다시 refetch 할 수 있습니다.

### 3. ErrorBoundary 를 이용한 선언적인 에러 처리 (event 에러를 잡기위한 useEventErrorHandle 구현)

**ErrorBoundary**는 error가 발생했을 때 어떤 UI를 보여줄 것인지 설정할 수 있습니다.

- 그러나 이벤트 핸들러(onClick, onChange 등등)에서 발생한 error는 일반적으로 ErrorBoundary에서 catch 하지 못합니다.
- 이벤트 핸들러에서 발생한 에러를 ErrorBoundary에서 catch 하도록 ErrorBoundary 클래스 컴포넌트를 개선하였습니다.
- `unhandledrejection`/`error` 라는 이벤트를 이용해 이벤트 핸들러에서 발생한 error를 전파시켜 ErrorBoundary에서 `renderFallback` 을 이용해 UI 를 보여줄 수 있습니다.
