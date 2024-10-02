import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryPostComponent } from './story-post.component';

describe('StoryPostComponent', () => {
  let component: StoryPostComponent;
  let fixture: ComponentFixture<StoryPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
