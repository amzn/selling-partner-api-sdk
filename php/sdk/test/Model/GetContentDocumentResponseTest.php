<?php
/**
 * GetContentDocumentResponseTest
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
use SpApi\Model\aplusContent\v2020_11_01\GetContentDocumentResponse;

/**
 * GetContentDocumentResponseTest Class Doc Comment
 *
 * @category    Class
 * @description GetContentDocumentResponse
 * @package     SpApi
 */
class GetContentDocumentResponseTest extends TestCase
{

    private GetContentDocumentResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetContentDocumentResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetContentDocumentResponse"
     */
    public function testGetContentDocumentResponse()
    {
        $this->assertInstanceOf(GetContentDocumentResponse::class, $this->model);
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

    /**
     * Test attribute "content_record"
     */
    public function testPropertyContentRecord()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\ContentRecord();
        
        $this->model->setContentRecord($testValue);
        $this->assertEquals($testValue, $this->model->getContentRecord());
    }
}
