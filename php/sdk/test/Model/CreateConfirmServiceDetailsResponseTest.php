<?php
/**
 * CreateConfirmServiceDetailsResponseTest
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
use OpenAPI\Client\Model\messaging\CreateConfirmServiceDetailsResponse;

/**
 * CreateConfirmServiceDetailsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the createConfirmServiceDetails operation.
 * @package     OpenAPI\Client
 */
class CreateConfirmServiceDetailsResponseTest extends TestCase
{

    private CreateConfirmServiceDetailsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateConfirmServiceDetailsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateConfirmServiceDetailsResponse"
     */
    public function testCreateConfirmServiceDetailsResponse()
    {
        $this->assertInstanceOf(CreateConfirmServiceDetailsResponse::class, $this->model);
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
