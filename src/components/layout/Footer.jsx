import React from 'react'

const Footer = (props) => {
  return (
    <footer id="footer" className={props.attr} aria-level="1">
        <div className="footer__inner container">
            <div className="footer__text">
                <h5>노지감귤</h5>
                <p>
                    궁금한 사항은 <br />
                    메일로 연락 주세요!
                    <br />
                    <a href="mailto:jo0132@naver.com">jo0132@naver.com</a>
                </p>
                <ul className="sns">
                    <li>
                        <a href="/"> </a>
                    </li>
                    <li>
                        <a href="/"> </a>
                    </li>
                    <li>
                        <a href="/"> </a>
                    </li>
                    <li>
                        <a href="/"> </a>
                    </li>
                    <li>
                        <a href="/"> </a>
                    </li>
                </ul>
            </div>
            <div className="footer__menu">
                <div>
                    <h4>사이트</h4>
                    <ul>
                        <li>
                            <a href="/">웹표준 사이트</a>
                        </li>
                        <li>
                            <a href="/">반응형 사이트</a>
                        </li>
                        <li>
                            <a href="/">패럴랙스 사이트</a>
                        </li>
                        <li>
                            <a href="/">포트폴리오 사이트</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>유형</h4>
                    <ul>
                        <li>
                            <a href="/">이미지 유형</a>
                        </li>
                        <li>
                            <a href="/">카드 유형</a>
                        </li>
                        <li>
                            <a href="/">이미지/텍스트 유형</a>
                        </li>
                        <li>
                            <a href="/">텍스트 유형</a>
                        </li>
                        <li>
                            <a href="/">베너 유형</a>
                        </li>
                        <li>
                            <a href="/">푸터 유형</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>스크립트</h4>
                    <ul>
                        <li>
                            <a href="/">검색 이팩트</a>
                        </li>
                        <li>
                            <a href="/">퀴즈 이팩트</a>
                        </li>
                        <li>
                            <a href="/">마우스 이팩트</a>
                        </li>
                        <li>
                            <a href="/">슬라이드 이팩트</a>
                        </li>
                        <li>
                            <a href="/">페럴랙스 이팩트</a>
                        </li>
                        <li>
                            <a href="/">게임 이팩트</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>언어</h4>
                    <ul>
                        <li>
                            <a href="/">CSS</a>
                        </li>
                        <li>
                            <a href="/">HTML</a>
                        </li>
                        <li>
                            <a href="/">JAVASCRIPT</a>
                        </li>
                        <li>
                            <a href="/">REACT</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__right">Copyright 2023. All Rights Reserved. - Designed by noji감귤</div>
        </div>
    </footer>
);
}

export default Footer