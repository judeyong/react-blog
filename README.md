#### 데모


-----


https://judeyong.github.io/react-blog/


-----


깃페이지 배포는 정적으로만 작동되어서 json-server을 이용한 db역할이 되지 않습니다.   
그냥 페이지만 봐주세요...   

-----


#### 설치와 실행 방법


설치 npm install   
실행 npm run dev   


-----


#### 프로젝트 계획한 이유   
자바스크립트를 어느 정도 공부하고 나서 react 연습을 시작하였습니다.   
react를 공부하면서 redux, typescript, nextjs, react-native등 또 새로운 기술을 접하였습니다.   
여러 가지 기술들을 보았지만 거의 대부분 클론 코딩이었습니다.   
클론 코딩은 상당히 도움이 되었지만 제 스스로 시작한 프로젝트는 하나도 없는 게 저의 고민이었습니다.   
그래서 서툴더라도 아는 것을 최대한 활용하면서 만들어 보자 마음먹었습니다.   
아직도 많은 것이 미흡하고 서툽니다. 스스로 해보는 게 가장 중요하다 생각하고 만들면서 연습했습니다.   


-----


사용한 라이브러리   
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
로그인 페이지와 회원가입 페이지 그리고 블로그 페이지가 존재합니다.   

json-server를 db역할로 사용하였습니다.   
axios를 이용하여 데이터를 주고 받습니다.   

