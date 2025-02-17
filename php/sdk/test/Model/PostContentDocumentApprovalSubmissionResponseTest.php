<?php
/**
 * PostContentDocumentApprovalSubmissionResponseTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\aplusContent\v2020_11_01\PostContentDocumentApprovalSubmissionResponse;

/**
 * PostContentDocumentApprovalSubmissionResponseTest Class Doc Comment
 *
 * @category    Class
 * @description PostContentDocumentApprovalSubmissionResponse
 * @package     SpApi
 */
class PostContentDocumentApprovalSubmissionResponseTest extends TestCase
{

    private PostContentDocumentApprovalSubmissionResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PostContentDocumentApprovalSubmissionResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PostContentDocumentApprovalSubmissionResponse"
     */
    public function testPostContentDocumentApprovalSubmissionResponse()
    {
        $this->assertInstanceOf(PostContentDocumentApprovalSubmissionResponse::class, $this->model);
    }

    /**
     * Test attribute "warnings"
     */
    public function testPropertyWarnings()
    {
        $testValue = [];
        
        $this->model->setWarnings($testValue);
        $this->assertEquals($testValue, $this->model->getWarnings());
    }
}
