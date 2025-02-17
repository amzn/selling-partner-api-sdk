<?php
/**
 * PostContentDocumentAsinRelationsResponseTest
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
use SpApi\Model\aplusContent\v2020_11_01\PostContentDocumentAsinRelationsResponse;

/**
 * PostContentDocumentAsinRelationsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description PostContentDocumentAsinRelationsResponse
 * @package     SpApi
 */
class PostContentDocumentAsinRelationsResponseTest extends TestCase
{

    private PostContentDocumentAsinRelationsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PostContentDocumentAsinRelationsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PostContentDocumentAsinRelationsResponse"
     */
    public function testPostContentDocumentAsinRelationsResponse()
    {
        $this->assertInstanceOf(PostContentDocumentAsinRelationsResponse::class, $this->model);
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
