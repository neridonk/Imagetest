export class Images {


    constructor(
        public imgid?: number,
        public date?: Date,
        public url?: string,
        public description?: string,
        public topicid?: number,
        public picdate?: Date

    ) {

    }

}


export class Topic {

    constructor(
        public topicid?: number,
        public title?: string,
        public userid?: number,
        public date?: Date,
        public images?: Images[]
    ) {

    }

}


export class User {

    constructor(
        public userid?: number,
        public name?: string,
        public email?: string,
        public password?: string
    ) {

    }

}