<?php
/**
 * AplusPaginatedResponseTest
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
use SpApi\Model\aplusContent\v2020_11_01\AplusPaginatedResponse;

/**
 * AplusPaginatedResponseTest Class Doc Comment
 *
 * @category    Class
 * @description A token that you use to retrieve the next page of results. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextPageToken&#x60; is null. Note that this operation can return empty pages.
 * @package     SpApi
 */
class AplusPaginatedResponseTest extends TestCase
{

    private AplusPaginatedResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AplusPaginatedResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AplusPaginatedResponse"
     */
    public function testAplusPaginatedResponse()
    {
        $this->assertInstanceOf(AplusPaginatedResponse::class, $this->model);
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
     * Test attribute "next_page_token"
     */
    public function testPropertyNextPageToken()
    {
        $testValue = 'test';
        
        $this->model->setNextPageToken($testValue);
        $this->assertEquals($testValue, $this->model->getNextPageToken());
    }
}
