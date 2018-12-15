import { Tag } from './tag.model';

export interface Subject {
    subjectId: string;
    featureId: string;
    tags: Tag[];
}
