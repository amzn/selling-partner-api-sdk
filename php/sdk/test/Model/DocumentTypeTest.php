<?php
/**
 * DocumentTypeTest
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
use OpenAPI\Client\Model\shipping\v2\DocumentType;

/**
 * DocumentTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The type of shipping document.
 * @package     OpenAPI\Client
 */
class DocumentTypeTest extends TestCase
{

    private DocumentType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DocumentType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DocumentType"
     */
    public function testDocumentType()
    {
        $this->assertInstanceOf(DocumentType::class, $this->model);
    }
}
