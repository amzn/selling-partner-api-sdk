<?php
/**
 * CreateProductReviewAndSellerFeedbackSolicitationResponseTest
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
use OpenAPI\Client\Model\solicitations\CreateProductReviewAndSellerFeedbackSolicitationResponse;

/**
 * CreateProductReviewAndSellerFeedbackSolicitationResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the createProductReviewAndSellerFeedbackSolicitation operation.
 * @package     OpenAPI\Client
 */
class CreateProductReviewAndSellerFeedbackSolicitationResponseTest extends TestCase
{

    private CreateProductReviewAndSellerFeedbackSolicitationResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateProductReviewAndSellerFeedbackSolicitationResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateProductReviewAndSellerFeedbackSolicitationResponse"
     */
    public function testCreateProductReviewAndSellerFeedbackSolicitationResponse()
    {
        $this->assertInstanceOf(CreateProductReviewAndSellerFeedbackSolicitationResponse::class, $this->model);
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
