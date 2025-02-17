<?php
/**
 * CreateAmazonMotorsResponseTest
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
use SpApi\Model\messaging\v1\CreateAmazonMotorsResponse;

/**
 * CreateAmazonMotorsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the createAmazonMotors operation.
 * @package     SpApi
 */
class CreateAmazonMotorsResponseTest extends TestCase
{

    private CreateAmazonMotorsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateAmazonMotorsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateAmazonMotorsResponse"
     */
    public function testCreateAmazonMotorsResponse()
    {
        $this->assertInstanceOf(CreateAmazonMotorsResponse::class, $this->model);
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
