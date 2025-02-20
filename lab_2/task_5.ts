enum BallTypes {
    Football = 'мяч для футбола',
    Basketball = 'мяч для баскетбола',
    TennisBall = 'мяч для тенниса',
    Volleyball = 'мяч для волейбола',
    GolfBall = 'мяч для гольфа',
}

type Ball = {
    type: BallTypes;
    weight: number;
    color: string;
};

const golf: Ball = {
    type: BallTypes.Football,
    weight: 45.9,
    color: 'белый',
};

console.log(JSON.stringify(golf, null, 2));