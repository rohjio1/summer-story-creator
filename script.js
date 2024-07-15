// DOM 요소 선택
const storyForm = document.getElementById('story-form');
const storyText = document.getElementById('story-text');

// 폼 제출 이벤트 리스너
storyForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 폼 데이터 가져오기
    const character = document.getElementById('character').value;
    const place = document.getElementById('place').value;
    const action = document.getElementById('action').value;
    
    // 이야기 생성
    const story = generateStory(character, place, action);
    
    // 결과 표시
    storyText.textContent = story;
});

// 이야기 생성 함수
function generateStory(character, place, action) {
    const stories = [
        `${character}(이)가 ${place}에 갔어요. 거기서 ${character}(이)는 ${action}했답니다. 정말 재미있는 모험이었죠!`,
        `어느 날, ${character}(이)는 ${place}에서 놀고 있었어요. 갑자기 ${character}(이)는 ${action}하기로 결심했어요. 그 결과 놀라운 일이 일어났답니다!`,
        `${place}에 사는 ${character}(이)가 있었어요. ${character}(이)의 꿈은 ${action}하는 것이었죠. 열심히 노력한 끝에 꿈을 이루었답니다!`
    ];
    
    // 랜덤으로 이야기 선택
    return stories[Math.floor(Math.random() * stories.length)];
}