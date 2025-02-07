<?php
/**
 * CreateConfirmOrderDetailsResponseTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\messaging\v1\CreateConfirmOrderDetailsResponse;

/**
 * CreateConfirmOrderDetailsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the createConfirmOrderDetails operation.
 * @package     OpenAPI\Client
 */
class CreateConfirmOrderDetailsResponseTest extends TestCase
{

    private CreateConfirmOrderDetailsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateConfirmOrderDetailsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateConfirmOrderDetailsResponse"
     */
    public function testCreateConfirmOrderDetailsResponse()
    {
        $this->assertInstanceOf(CreateConfirmOrderDetailsResponse::class, $this->model);
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
