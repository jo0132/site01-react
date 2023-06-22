import React from 'react'

const intro = (props) => {
  return (
    <section id="introSection" className={props.attr}>
    <h3 className="blind">사이트 소개</h3>
    <div className="intro__inner container">
        <div className="intro__title">
            <span>frontend</span>
            <h3>외국 소설들을<br/> 소개합니다.</h3>
            <p>
                저희 사이트는 여러분의 사랑을 받는 소설을<br/>
                소개하는 사이트 입니다.<br/>
                그 전에 좋은 소설을 찾는 것이 중요합니다.
            </p>
        </div>
        <div className="intro__desc">
            <div>
                <h4 className="text__title icon-bg1">장르와 관심사 파악</h4>
                <p className="text__desc">자신이 선호하는 장르나 관심사를 고려하여 독서목록을 작성해 보세요. 이를 통해 원하는 주제나 스타일의 소설을 찾을 수 있습니다.</p>
            </div>
            <div>
                <h4 className="text__title icon-bg2">베스트셀러 목록 확인</h4>
                <p className="text__desc">베스트셀러 목록은 대중적인 인기를 얻은 소설들을 포함하고 있습니다. 출판사나 온라인 서점의 베스트셀러 목록을 확인해보면 다양한 장르와 주제의 인기 작품을 찾을 수 있습니다.</p>
            </div>
            <div>
                <h4 className="text__title icon-bg3">작가의 다른 작품 탐색</h4>
                <p className="text__desc">이미 좋아하는 작가의 다른 작품을 찾아보세요. 작가의 스타일이나 이야기 구성에 대한 선호도가 유사할 가능성이 큽니다.</p>
            </div>
            <div>
                <h4 className="text__title icon-bg4">도서관 방문</h4>
                <p className="text__desc">도서관은 다양한 작품을 무료로 대여할 수 있는 좋은 장소입니다. 도서관의 추천 도서나 독서 행사를 확인하여 다양한 소설을 만나보세요.</p>
            </div>

        </div>
    </div>
</section>
  )
}

export default intro