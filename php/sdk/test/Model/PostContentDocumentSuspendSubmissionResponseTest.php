<?php
/**
 * PostContentDocumentSuspendSubmissionResponseTest
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
use SpApi\Model\aplusContent\v2020_11_01\PostContentDocumentSuspendSubmissionResponse;

/**
 * PostContentDocumentSuspendSubmissionResponseTest Class Doc Comment
 *
 * @category    Class
 * @description PostContentDocumentSuspendSubmissionResponse
 * @package     SpApi
 */
class PostContentDocumentSuspendSubmissionResponseTest extends TestCase
{

    private PostContentDocumentSuspendSubmissionResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PostContentDocumentSuspendSubmissionResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PostContentDocumentSuspendSubmissionResponse"
     */
    public function testPostContentDocumentSuspendSubmissionResponse()
    {
        $this->assertInstanceOf(PostContentDocumentSuspendSubmissionResponse::class, $this->model);
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
