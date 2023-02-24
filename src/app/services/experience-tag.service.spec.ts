import { TestBed } from '@angular/core/testing';

import { ExperienceTagService } from './experience-tag.service';

describe('ExperienceTagsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExperienceTagService = TestBed.get(ExperienceTagService);
    expect(service).toBeTruthy();
  });
});
