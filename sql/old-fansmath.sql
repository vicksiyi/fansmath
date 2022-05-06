/*
 Navicat Premium Data Transfer

 Source Server         : 阿里云
 Source Server Type    : MySQL
 Source Server Version : 80026
 Source Host           : 121.41.122.194:3306
 Source Schema         : fansmath

 Target Server Type    : MySQL
 Target Server Version : 80026
 File Encoding         : 65001

 Date: 06/05/2022 16:28:58
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for addCourseRequests
-- ----------------------------
DROP TABLE IF EXISTS `addCourseRequests`;
CREATE TABLE `addCourseRequests`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `fromId` int(0) NOT NULL COMMENT '请求发送者',
  `toId` int(0) NOT NULL COMMENT '被邀请人',
  `type` int(0) NOT NULL DEFAULT 0 COMMENT '0=>请求学生加入课程\r\n1=>学生请求加入某课程\r\n2=>请求老师加入课程\r\n3=>老师请求加入课程\r\n4=>请求学生加入课程(通过)\r\n5=>学生请求加入某课程(通过)\r\n6=>请求老师加入课程(通过)\r\n7=>老师请求加入课程(通过)\r\n8=>请求学生加入课程(拒绝)\r\n9=>学生请求加入某课程(拒绝)\r\n10=>请求老师加入课程(拒绝)\r\n11=>老师请求加入课程(拒绝)',
  `courseId` int(0) NOT NULL,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `addCourseRequest_teacher_id`(`fromId`) USING BTREE,
  INDEX `addCourseRequest_student_id`(`toId`) USING BTREE,
  INDEX `addCourseRequest_course_id`(`courseId`) USING BTREE,
  CONSTRAINT `addCourseRequest_course_id` FOREIGN KEY (`courseId`) REFERENCES `courses` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `addCourseRequest_student_id` FOREIGN KEY (`toId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `addCourseRequest_teacher_id` FOREIGN KEY (`fromId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for admins
-- ----------------------------
DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for chapterDiscuss
-- ----------------------------
DROP TABLE IF EXISTS `chapterDiscuss`;
CREATE TABLE `chapterDiscuss`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `userId` int(0) NOT NULL,
  `doubleChildChapterId` int(0) NOT NULL,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `chapterDiscuss_user_id`(`userId`) USING BTREE,
  INDEX `chapterDiscuss_doubleChildChapter_id`(`doubleChildChapterId`) USING BTREE,
  CONSTRAINT `chapterDiscuss_doubleChildChapter_id` FOREIGN KEY (`doubleChildChapterId`) REFERENCES `doubleChildChapters` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `chapterDiscuss_user_id` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for chapters
-- ----------------------------
DROP TABLE IF EXISTS `chapters`;
CREATE TABLE `chapters`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `courseId` int(0) NOT NULL,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `chapters_course_id`(`courseId`) USING BTREE,
  CONSTRAINT `chapters_course_id` FOREIGN KEY (`courseId`) REFERENCES `courses` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for childChapters
-- ----------------------------
DROP TABLE IF EXISTS `childChapters`;
CREATE TABLE `childChapters`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `courseId` int(0) NOT NULL,
  `fatherChapterId` int(0) NOT NULL,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `childChapters_chapter_id`(`fatherChapterId`) USING BTREE,
  INDEX `childChapters_course_id`(`courseId`) USING BTREE,
  CONSTRAINT `childChapters_chapter_id` FOREIGN KEY (`fatherChapterId`) REFERENCES `chapters` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `childChapters_course_id` FOREIGN KEY (`courseId`) REFERENCES `courses` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for correctExam
-- ----------------------------
DROP TABLE IF EXISTS `correctExam`;
CREATE TABLE `correctExam`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `userId` int(0) NOT NULL,
  `examId` int(0) NOT NULL,
  `examTitleId` int(0) NOT NULL,
  `num` int(0) NOT NULL,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `correctExam_user_id`(`userId`) USING BTREE,
  INDEX `correctExam_exam_id`(`examId`) USING BTREE,
  INDEX `correctExam_examTitle_id`(`examTitleId`) USING BTREE,
  CONSTRAINT `correctExam_exam_id` FOREIGN KEY (`examId`) REFERENCES `exams` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `correctExam_examTitle_id` FOREIGN KEY (`examTitleId`) REFERENCES `examTitles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `correctExam_user_id` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 34 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for courseAndScale
-- ----------------------------
DROP TABLE IF EXISTS `courseAndScale`;
CREATE TABLE `courseAndScale`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `courseId` int(0) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `scale` int(0) NOT NULL,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `couresAndScale_courses_id`(`courseId`) USING BTREE,
  CONSTRAINT `couresAndScale_courses_id` FOREIGN KEY (`courseId`) REFERENCES `courses` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for courseAndUser
-- ----------------------------
DROP TABLE IF EXISTS `courseAndUser`;
CREATE TABLE `courseAndUser`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `userId` int(0) NOT NULL,
  `courseId` int(0) NOT NULL,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `couresAndUser_course_id`(`courseId`) USING BTREE,
  INDEX `couresAndUser_user_id`(`userId`) USING BTREE,
  CONSTRAINT `couresAndUser_course_id` FOREIGN KEY (`courseId`) REFERENCES `courses` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `couresAndUser_user_id` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for courseScore
-- ----------------------------
DROP TABLE IF EXISTS `courseScore`;
CREATE TABLE `courseScore`  (
  `userId` int(0) NOT NULL,
  `courseId` int(0) NOT NULL,
  `score` int(0) NOT NULL,
  `msg` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`userId`) USING BTREE,
  INDEX `courseScore_course`(`courseId`) USING BTREE,
  CONSTRAINT `courseScore_course` FOREIGN KEY (`courseId`) REFERENCES `courses` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `courseScore_user_id` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for courses
-- ----------------------------
DROP TABLE IF EXISTS `courses`;
CREATE TABLE `courses`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `teacherId` int(0) NOT NULL,
  `classIntroduction` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `classOverview` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `classTarget` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `msg` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` int(0) NOT NULL DEFAULT 0,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `coures_teacher_id`(`teacherId`) USING BTREE,
  CONSTRAINT `coures_teacher_id` FOREIGN KEY (`teacherId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 37 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for doubleChildChapterReplys
-- ----------------------------
DROP TABLE IF EXISTS `doubleChildChapterReplys`;
CREATE TABLE `doubleChildChapterReplys`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `discussId` int(0) NOT NULL,
  `userId` int(0) NOT NULL,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `doubleChildChapterReplys_doubleChildChapter_id`(`discussId`) USING BTREE,
  INDEX `doubleChildChapterReplys_user_id`(`userId`) USING BTREE,
  CONSTRAINT `doubleChildChapterReplys_doubleChildChapter_id` FOREIGN KEY (`discussId`) REFERENCES `chapterDiscuss` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `doubleChildChapterReplys_user_id` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for doubleChildChapters
-- ----------------------------
DROP TABLE IF EXISTS `doubleChildChapters`;
CREATE TABLE `doubleChildChapters`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `videoUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `pdfUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `target` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `fChapterId` int(0) NOT NULL,
  `courseId` int(0) NOT NULL,
  `doubleChapterId` int(0) NOT NULL,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `doubleChildChapters_fchapter_id`(`fChapterId`) USING BTREE,
  INDEX `doubleChildChapters_double_fChapter_id`(`doubleChapterId`) USING BTREE,
  INDEX `doubleChildChapters_course_id`(`courseId`) USING BTREE,
  CONSTRAINT `doubleChildChapters_course_id` FOREIGN KEY (`courseId`) REFERENCES `courses` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `doubleChildChapters_double_fChapter_id` FOREIGN KEY (`doubleChapterId`) REFERENCES `chapters` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `doubleChildChapters_fchapter_id` FOREIGN KEY (`fChapterId`) REFERENCES `childChapters` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 29 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for examAndCourse
-- ----------------------------
DROP TABLE IF EXISTS `examAndCourse`;
CREATE TABLE `examAndCourse`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `examId` int(0) NOT NULL,
  `type` int(0) NOT NULL,
  `typeId` int(0) NOT NULL,
  `courseId` int(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `examAndCourse_exam_id`(`examId`) USING BTREE,
  INDEX `examAndCourse_id3`(`typeId`) USING BTREE,
  INDEX `examAndCourse_course_id`(`courseId`) USING BTREE,
  CONSTRAINT `examAndCourse_course_id` FOREIGN KEY (`courseId`) REFERENCES `courses` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `examAndCourse_exam_id` FOREIGN KEY (`examId`) REFERENCES `exams` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for examTitles
-- ----------------------------
DROP TABLE IF EXISTS `examTitles`;
CREATE TABLE `examTitles`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `titleFormat` int(0) NOT NULL DEFAULT 0,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `selectFormat` int(0) NOT NULL DEFAULT 0,
  `A` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `B` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `C` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `D` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` int(0) NOT NULL,
  `num` int(0) NOT NULL,
  `result` int(0) NULL DEFAULT NULL,
  `time` datetime(0) NOT NULL,
  `examId` int(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `examTitles_exam_id`(`examId`) USING BTREE,
  CONSTRAINT `examTitles_exam_id` FOREIGN KEY (`examId`) REFERENCES `exams` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 34 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for exams
-- ----------------------------
DROP TABLE IF EXISTS `exams`;
CREATE TABLE `exams`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `courseId` int(0) NOT NULL,
  `childChapterId` int(0) NULL DEFAULT NULL,
  `chapterId` int(0) NULL DEFAULT NULL,
  `type` int(0) NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` int(0) NOT NULL DEFAULT 0,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `exams_course_id`(`courseId`) USING BTREE,
  INDEX `exams_chapter_id`(`chapterId`) USING BTREE,
  INDEX `exams_childChapter_id`(`childChapterId`) USING BTREE,
  CONSTRAINT `exams_chapter_id` FOREIGN KEY (`chapterId`) REFERENCES `chapters` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `exams_childChapter_id` FOREIGN KEY (`childChapterId`) REFERENCES `childChapters` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `exams_course_id` FOREIGN KEY (`courseId`) REFERENCES `courses` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for feedbacks
-- ----------------------------
DROP TABLE IF EXISTS `feedbacks`;
CREATE TABLE `feedbacks`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `imgList` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `userId` int(0) NOT NULL,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `feedbacks_user_id`(`userId`) USING BTREE,
  CONSTRAINT `feedbacks_user_id` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for links
-- ----------------------------
DROP TABLE IF EXISTS `links`;
CREATE TABLE `links`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `doubleChildChapterId` int(0) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `link` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `links_doubleChildChapter_id`(`doubleChildChapterId`) USING BTREE,
  CONSTRAINT `links_doubleChildChapter_id` FOREIGN KEY (`doubleChildChapterId`) REFERENCES `doubleChildChapters` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for lookDones
-- ----------------------------
DROP TABLE IF EXISTS `lookDones`;
CREATE TABLE `lookDones`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `userId` int(0) NOT NULL,
  `doubleChildChapterId` int(0) NOT NULL,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `lookDones_user_id`(`userId`) USING BTREE,
  INDEX `lookDones_doubleChildChapter_id`(`doubleChildChapterId`) USING BTREE,
  CONSTRAINT `lookDones_doubleChildChapter_id` FOREIGN KEY (`doubleChildChapterId`) REFERENCES `doubleChildChapters` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `lookDones_user_id` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for lookTimes
-- ----------------------------
DROP TABLE IF EXISTS `lookTimes`;
CREATE TABLE `lookTimes`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `doubleChildChapterId` int(0) NOT NULL,
  `userId` int(0) NOT NULL,
  `lookTime` int(0) NOT NULL,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `lookTime_user_id`(`userId`) USING BTREE,
  INDEX `lookTime_doubleChildChapter_id`(`doubleChildChapterId`) USING BTREE,
  CONSTRAINT `lookTime_doubleChildChapter_id` FOREIGN KEY (`doubleChildChapterId`) REFERENCES `doubleChildChapters` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `lookTime_user_id` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 142 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for messages
-- ----------------------------
DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `userId` int(0) NOT NULL,
  `action` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` int(0) NOT NULL DEFAULT 0,
  `type` int(0) NOT NULL COMMENT '0=>请求学生加入课程\r\n1=>学生请求加入某课程\r\n',
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `messages_user_id`(`userId`) USING BTREE,
  CONSTRAINT `messages_user_id` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for msgIndexs
-- ----------------------------
DROP TABLE IF EXISTS `msgIndexs`;
CREATE TABLE `msgIndexs`  (
  `userId` int(0) NOT NULL,
  `toUserId` int(0) NOT NULL,
  `status` int(0) NOT NULL,
  `msgId` int(0) NOT NULL,
  PRIMARY KEY (`userId`) USING BTREE,
  INDEX `msgindexs_touser_id`(`toUserId`) USING BTREE,
  INDEX `msgindexs_msg_id`(`msgId`) USING BTREE,
  CONSTRAINT `msgindexs_msg_id` FOREIGN KEY (`msgId`) REFERENCES `msgs` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `msgindexs_touser_id` FOREIGN KEY (`toUserId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `msgIndexs_user_id` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for msgs
-- ----------------------------
DROP TABLE IF EXISTS `msgs`;
CREATE TABLE `msgs`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `type` int(0) NOT NULL,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for quotes
-- ----------------------------
DROP TABLE IF EXISTS `quotes`;
CREATE TABLE `quotes`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `quote` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for referenceBooks
-- ----------------------------
DROP TABLE IF EXISTS `referenceBooks`;
CREATE TABLE `referenceBooks`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `author` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `version` int(0) NOT NULL,
  `press` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `isbn` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `courseId` int(0) NOT NULL,
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `referenceBook_course_id`(`courseId`) USING BTREE,
  CONSTRAINT `referenceBook_course_id` FOREIGN KEY (`courseId`) REFERENCES `courses` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for schools
-- ----------------------------
DROP TABLE IF EXISTS `schools`;
CREATE TABLE `schools`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for statements
-- ----------------------------
DROP TABLE IF EXISTS `statements`;
CREATE TABLE `statements`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `examId` int(0) NOT NULL,
  `msg` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `statement_exam_id`(`examId`) USING BTREE,
  CONSTRAINT `statement_exam_id` FOREIGN KEY (`examId`) REFERENCES `exams` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 32 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for submitExam
-- ----------------------------
DROP TABLE IF EXISTS `submitExam`;
CREATE TABLE `submitExam`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `examId` int(0) NOT NULL,
  `titleId` int(0) NOT NULL,
  `resultType` int(0) NOT NULL DEFAULT 0,
  `result` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `userId` int(0) NOT NULL,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `submitExam_exam_id`(`examId`) USING BTREE,
  INDEX `submitExam_examTitle_id`(`titleId`) USING BTREE,
  INDEX `submitExam_user_id`(`userId`) USING BTREE,
  CONSTRAINT `submitExam_exam_id` FOREIGN KEY (`examId`) REFERENCES `exams` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `submitExam_examTitle_id` FOREIGN KEY (`titleId`) REFERENCES `examTitles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `submitExam_user_id` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 59 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for teacherAndCourse
-- ----------------------------
DROP TABLE IF EXISTS `teacherAndCourse`;
CREATE TABLE `teacherAndCourse`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `courseId` int(0) NOT NULL,
  `userId` int(0) NOT NULL,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `teacherAndCourse_course_id`(`courseId`) USING BTREE,
  INDEX `teacherAndCourse_teacher_id`(`userId`) USING BTREE,
  CONSTRAINT `teacherAndCourse_course_id` FOREIGN KEY (`courseId`) REFERENCES `courses` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `teacherAndCourse_teacher_id` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for teacherOauths
-- ----------------------------
DROP TABLE IF EXISTS `teacherOauths`;
CREATE TABLE `teacherOauths`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `level` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `img1` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `userId` int(0) NOT NULL,
  `img2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `school` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`, `userId`) USING BTREE,
  INDEX `teacherOauth_user_id`(`userId`) USING BTREE,
  CONSTRAINT `teacherOauth_user_id` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `number` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `school` int(0) NOT NULL,
  `msg` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `nickName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `avatarUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `identity` int(0) NOT NULL DEFAULT 0,
  `time` datetime(0) NOT NULL,
  `openid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` tinyint(0) NOT NULL DEFAULT 0,
  `nameStatus` tinyint(0) NOT NULL DEFAULT 0,
  `schoolRollStatus` tinyint(0) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `users_school_id`(`school`) USING BTREE,
  CONSTRAINT `users_school_id` FOREIGN KEY (`school`) REFERENCES `schools` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
