<?php
/**
 * ValidateContentDocumentAsinRelationsResponseTest
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
use SpApi\Model\aplusContent\v2020_11_01\ValidateContentDocumentAsinRelationsResponse;

/**
 * ValidateContentDocumentAsinRelationsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description ValidateContentDocumentAsinRelationsResponse
 * @package     SpApi
 */
class ValidateContentDocumentAsinRelationsResponseTest extends TestCase
{

    private ValidateContentDocumentAsinRelationsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ValidateContentDocumentAsinRelationsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ValidateContentDocumentAsinRelationsResponse"
     */
    public function testValidateContentDocumentAsinRelationsResponse()
    {
        $this->assertInstanceOf(ValidateContentDocumentAsinRelationsResponse::class, $this->model);
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
     * Test attribute "errors"
     */
    public function testPropertyErrors()
    {
        $testValue = [];
        
        $this->model->setErrors($testValue);
        $this->assertEquals($testValue, $this->model->getErrors());
    }
}
