export const dataTask: Step[] = [
    {
        id: 1,
        step: "step 1",
        screens: [
            "assets/step1.1.png",
            "assets/step1.2.png",
            "assets/step1.3.png",
            "assets/step1.4.png",
            "assets/step1.5.png"
        ]
    },
    {
        id: 2,
        step: "step 2",
        screens: [
            "assets/step2.1.png",
            "assets/step2.2.png",
            "assets/step2.3.png"
        ]
    },
    {
        id: 3,
        step: "step 3",
        screens: [
            "assets/step3.1.png",
            "assets/step3.2.png",
            "assets/step3.3.png"
        ]
    },
    {
        id: 4,
        step: "step 4",
        screens: [
            "assets/step4.1.png",
            "assets/step4.2.png"
        ]
    },
    {
        id: 5,
        step: "step 5",
        screens: [
            "assets/step5.1.png",
            "assets/step5.2.png",
            "assets/step5.3.png"
        ]
    },
    {
        id: 6,
        step: "step 6",
        screens: [
            "assets/step6.1.png",
            "assets/step6.2.png",
            "assets/step6.3.png"
        ]
    },
    {
        id: 7,
        step: "step 7",
        screens: [
            "assets/step7.1.png",
            "assets/step7.2.png",
            "assets/step7.3.png"
        ]
    },
    {
        id: 8,
        step: "step 8",
        screens: [
            "assets/step8.1.png",
            "assets/step8.2.png"
        ]
    },
    {
        id: 9,
        step: "step 9",
        screens: [
            "assets/step9.1.png",
            "assets/step9.2.png",
            "assets/step9.3.png"
        ]
    },
    {
        id: 10,
        step: "step 10",
        screens: [
            "assets/step10.1.png",
            "assets/step10.2.png",
            "assets/step10.3.png"
        ]
    }
]

export interface Step {
    id: number;
    step: string;
    screens: string[]
}