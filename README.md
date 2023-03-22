#### 데모


-----


https://judeyong.github.io/react-blog/


-----


### 깃허브페이지 배포는 정적으로만 작동되어서 json-server을 이용한 db 역할이 되지 않는다고 합니다...   



-----


#### 설치와 실행 방법


## 설치 npm install   
## 실행 npm run dev   


-----


#### 프로젝트 계획한 이유   
자바스크립트를 어느 정도 공부하고 나서 react 연습을 시작하였습니다.   
react를 공부하면서 redux, typescript, nextjs, react-native등 또 새로운 기술을 접하였습니다.   
여러 가지 기술들을 보았지만 거의 대부분 클론 코딩이었습니다.   
클론 코딩은 상당히 도움이 되었지만 제 스스로 시작한 프로젝트는 하나도 없는 게 저의 고민이었습니다.   
그래서 서툴더라도 아는 것을 활용해서 스스로 만들어 보자 계획을 세웠습니다.   
아직도 많은 것이 미흡하고 서툽니다. 스스로 해보는 게 가장 중요하다 생각하고 만들면서 연습했습니다.   


-----


### 사용한 라이브러리   

    "@reduxjs/toolkit": "^1.9.2",   
    "@testing-library/jest-dom": "^5.16.5",    
    "@testing-library/react": "^13.4.0",    
    "@testing-library/user-event": "^13.5.0",    
    "axios": "^1.2.6",    
    "concurrently": "^7.6.0",    
    "json-server": "^0.17.1",    
    "react": "^18.2.0",    
    "react-dom": "^18.2.0",    
    "react-redux": "^8.0.5",    
    "react-router-dom": "^6.8.0",    
    "react-scripts": "5.0.1",    
    "styled-components": "^5.3.6",    
    "web-vitals": "^2.1.4"    


-----


### 라이브러리 역할
react-router    
먼저 로그인 페이지와 회원가입 페이지 그리고 블로그 페이지(/ 루트에 해당됨).   
react-router를 통해 3개의 페이지를 이동합니다.    

    const routes = [
      {
        path: '/',
        element: <Home />,
      },
      {
        path:'/login',
        element: <LoginPage />,
        auth: false,
      },
      {
        path:'/signup',
        element: <SignUpPage />,
        auth: false,
      },
    ]

json-server 라이브러리는 db역할합니다.    
상위 디렉토리의 db.json 파일에 안에 데이터를 저장합니다.   
회원 가입이 성공하면 db.json 파일에 안에 members 배열에 객체로 저장됩니다.   
회원들이 쓴 글 들은 db.json 파일에 안에 posts 배열에 객체로 저장됩니다.    
json-server의 db가 켜지면 아래 경로로 axios 메소드를 사용해 데이터에 접근합니다.   
    
    'http://localhost:3004/members'
    'http://localhost:3004/posts'


axios를 이용하여 데이터를 주고 받습니다.   
    
    axios.post('http://localhost:3004/members',{ 보낼 데이터 })
    
    axios.get('http://localhost:3004/posts?_sort=created_At&_order=desc')
    
concurrently는 db와 client를 동시에 실행하기 위해서 사용합니다.   
scripts에 명령을 추가 했습니다.

    "dev": "concurrently \" npm run db \" \" npm run start \"",
    
블로그 글을 클릭하면 상세보기가 가능합니다.   

상세보기는 페이지 이동을 하지않고 modal로 구현하였습니다.   

modal은 styled-component를 이용하여 구현하였습니다.    

프로젝트는 기본적인 css와 styled-compoenets를 같이 사용했습니다.    

redux-toolkit을 이용하여 로그인 상태와 로그인한 회원의 상태를 관리합니다.    
store 폴더에 slice와 configureStore가 저장되어 있습니다.

-----


### 간단한 프로젝트 설명   

처음 접하는 메인 페이지는 블로그 페이지입니다.   

로그인을 하지 않은 상태에서 글을 쓰려 하거나 글 목록을 클릭하면 로그인 페이지로 이동시킵니다.    

이메일 아이디가 없다면 회원가입을 해야 합니다. 회원가입은 이미 존재하는 아이디가 있는지 확인하는 작업을 합니다.   

json-server의 경로는 3004로 지정하였습니다. 3004/members에 회원가입 완료 후 정보가 저장됩니다.    

로그인은 3004/members에 맞는 이메일과 비밀번호를 찾아서 맞는 경우 로그인이 성공하고 실패하면 error ui를 표시합니다.    

로그인이 성공하면 auth 슬라이스에 로그인 상태를 바꿔주고 로그인한 이메일 정보를 가져옵니다.    

성공한 이메일 정보를 네비게이션바 중앙에 표시합니다.     

로그인이 되었다면 다른 사람들의 글을 클릭해서 modal로 볼수 있고 새로운 글을 쓸 수 있게 됩니다.     

이미 자신이 쓴 글을 수정하거 삭제 할 수 있습니다.    

글을 쓸 때에 제목이나 내용이 비어 있지 못합니다.    

로그인 상태에서 다시 회원가입 페이지나 로그인 페이지로 갈 수는 없습니다.    

