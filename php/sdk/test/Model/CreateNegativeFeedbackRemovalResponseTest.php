<?php
/**
 * CreateNegativeFeedbackRemovalResponseTest
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
use OpenAPI\Client\Model\messaging\v1\CreateNegativeFeedbackRemovalResponse;

/**
 * CreateNegativeFeedbackRemovalResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the createNegativeFeedbackRemoval operation.
 * @package     OpenAPI\Client
 */
class CreateNegativeFeedbackRemovalResponseTest extends TestCase
{

    private CreateNegativeFeedbackRemovalResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateNegativeFeedbackRemovalResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateNegativeFeedbackRemovalResponse"
     */
    public function testCreateNegativeFeedbackRemovalResponse()
    {
        $this->assertInstanceOf(CreateNegativeFeedbackRemovalResponse::class, $this->model);
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
